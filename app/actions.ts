'use server';

import { prisma } from "@/prisma";
import { signIn } from "@/auth"
import { redirect } from "next/navigation"

export const signInWithCredentials = async (prevState: any, formData: FormData) => {
    'use server'
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    signIn('credentials', { email, password })
    return { message: "Signin with credentials" }
}

export const signUpWithCredentials = async (prevState: any, formData: FormData) => {
    'use server'
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    await prisma.user.create({ data: { name, email, password } })
    redirect('/auth/signin')
    return { message: "Signin with credentials" }
}

export const signInWithProviders = async (provider: string) => {
    'use server'
    const user = await signIn(provider, { redirectTo: '/' })
    return { message: "Signin with credentials" }
}