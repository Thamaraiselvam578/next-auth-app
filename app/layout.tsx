import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next auth app",
    description: "Next auth app with MUI and NextAuth.js prisma and supabase",
};

const RootLayout = async ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    const session = await auth()
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <SessionProvider session={session}>
                            <Toaster position="top-center" />
                            {children}
                        </SessionProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}

export default RootLayout