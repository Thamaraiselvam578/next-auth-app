"use server";

import { prisma } from "@/prisma";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { saltAndHashPassword } from "./utils/basicutils";
import { SigninSchema, signinSchema } from "./lib/schema";
import { AuthError } from "next-auth";

export const signInWithCredentials = async (credentials: SigninSchema) => {
    "use server";
    try {
        const { error, data } = signinSchema.safeParse(credentials)
        if (error) {
            return { message: "Please provide valid credentials", status: "error" }
        }
        const user = await signIn("credentials", { ...data, redirectTo: "/" },);
        console.log('user: ', user);
    } catch (error) {
        if (error instanceof AuthError) {
            return { message: error.message, status: "error" }
        }
    }
    return { message: "Logged in successfully", status: "success" }
};

export const signout = async () => {
    "use server";
    await signOut({ redirect: true });
    return { message: "Signout successfully" };
};

export const signUpWithCredentials = async (
    prevState: any,
    formData: FormData
) => {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    try {
        const existing_user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existing_user) {
            return { message: "User already exists", status: "error" };
        }

        const password = saltAndHashPassword(formData.get("password") as string);
        await prisma.user.create({ data: { name, email, password } });
        return { message: "Signin with credentials", status: "success" };
    } catch (error: any) {
        return { message: error.message };
    }
};

export const signInWithProviders = async (provider: string) => {
    "use server";
    await signIn(provider, { redirectTo: "/" });
    return { message: "Signin with credentials" };
};
