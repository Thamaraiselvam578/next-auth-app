"use server";

import { prisma } from "@/prisma";
import { signIn, signOut } from "@/auth";
import { saltAndHashPassword } from "../../utils/basicUtils";
import { signinSchema } from "@/app/lib/schema";
import { AuthError } from "next-auth";

export const signInWithCredentials = async (prevState: any, formData: FormData) => {
    "use server";
    try {
        const credentials = {
            email: formData.get("email") as string,
            password: formData.get("password") as string
        };
        const { error, data } = signinSchema.safeParse(credentials);
        if (error) {
            return { message: "Please provide valid credentials", status: "error" }
        }
        await signIn("credentials", { ...data })
    } catch (error: any) {
        if (error instanceof AuthError) {
            return { message: error.message, status: "error" }
        }
    }
    return { message: "Login successful", status: "success" }
};

export const signout = async () => {
    "use server";
    await signOut({ redirectTo: "/auth/signin" });
    return { message: "Signout successfully" };
};

export const signUpWithCredentials = async (prevState: any, formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    try {
        const existing_user = await prisma.user.findUnique({ where: { email: email } });
        if (existing_user) {
            return { message: "Account already exists. Please signin", status: "error" };
        }
        const password = saltAndHashPassword(formData.get("password") as string);
        await prisma.user.create({ data: { name, email, password } });
        return { message: "Signin with credentials", status: "success" };
    } catch (error: any) {
        return { message: error.message, status: "error" };
    }
};

export const signInWithProviders = async (provider: string) => {
    "use server";
    await signIn(provider, { redirectTo: "/" });
    return { message: "Login successfull", status: "success" };
};
