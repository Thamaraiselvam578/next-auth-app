import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/prisma";
import { signinSchema } from "./app/lib/schema";

export default {
    pages: {
        signIn: "/auth/signin",
        signOut: "/",
    },
    providers: [
        GitHub,
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const { error } = signinSchema.safeParse(credentials);
                if (error) return null;

                const email = credentials.email as string;
                let user = null;

                const existing_user: any = await prisma.user.findUnique({
                    where: { email },
                });

                if (existing_user) {
                    const matchPassword = bcrypt.compareSync(credentials.password as string, existing_user.password);
                    if (matchPassword) {
                        user = existing_user;
                    } else {
                        throw new Error("Incorrect password.");
                    }
                } else {
                    throw new Error("Account not created.");
                }
                return user;
            },
        }),
    ],
} satisfies NextAuthConfig