
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub, Google, Credentials({
        credentials: {
            email: {},
            password: {},
        },
        authorize: async (credentials) => {
            let user = null
            return user
        },
    }),],
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout"
    },
})