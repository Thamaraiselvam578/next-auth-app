import { NextResponse } from "next/server"
import authConfig from "./auth.config"
import NextAuth from "next-auth"

const { auth } = NextAuth(authConfig)

export default auth(async (req) => {
    const { nextUrl } = req
    const isLoggedin = !!req.auth
    const isAuthPages = (nextUrl.pathname.startsWith("/auth/signin") || nextUrl.pathname.startsWith("/auth/signup"))
    if (!isLoggedin && !isAuthPages) {
        return NextResponse.redirect(new URL('/auth/signin', nextUrl))
    }
    return NextResponse.next()
})

export const config = { matcher: ["/"] }