import { encode as defaultEncode } from "next-auth/jwt";
import { v4 as uuid } from "uuid";

import { schema } from "@/app/lib/schema";
import { prisma } from "@/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { cookies } from 'next/headers'
import { toast } from "react-hot-toast";

const adapter = PrismaAdapter(prisma);

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter,
    // session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
    session: { strategy: "database" },
    providers: [
        GitHub,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = await schema.parseAsync(credentials);

                    const user = await prisma.user.findUnique({
                        where: { email: email },
                    });

                    if (!user) {
                        throw new Error("Invalid credentials.");
                    }
                    toast.success("Signin successfully")
                    return user as any;
                } catch (error: any) {
                    toast.error(error.message)
                    return null as any;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account?.provider === "credentials") {
                token.credentials = true;
            }
            return token;
        },
    },
    jwt: {
        encode: async function (params) {
            if (params.token?.credentials) {
                const sessionToken = uuid();

                if (!params.token.sub) {
                    throw new Error("No user ID found in token");
                }

                const createdSession = await adapter?.createSession?.({
                    sessionToken: sessionToken,
                    userId: params.token.sub,
                    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                });

                if (!createdSession) {
                    throw new Error("Failed to create session");
                }

                return sessionToken;
            }
            return defaultEncode(params);
        },
    },
});

declare module "next-auth" {
    interface Session {
        accessToken?: string;
    }
}