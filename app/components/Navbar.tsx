"use client";
import React from 'react'
import { Avatar, Box, Typography, Button, IconButton } from "@mui/material";
import { Contact, Home, LogOut, Settings, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()

    return (
        <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#000", px: 2, p: 2, boxShadow: "0px 4px 4px 0 #00000010", position: "sticky", top: 0 }}>
            <Image src={'./next.svg'} height={30} width={70} alt="logo" style={{ filter: "invert(1)" }} />
            <Box sx={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: { xs: 1, sm: 2, md: 3, lg: 5 }, flexGrow: 1, "& a": {
                    textDecoration: "none",
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    color: "#fff",
                    "&:hover": {
                        fontWeight: 500
                    }
                }
            }}>
                <Link href={"/"} className={pathname === "/" ? "active" : ""}>
                    <Home size={15} name="user-round" strokeWidth={2} color="#fff" />
                    <span>Home</span>
                </Link>
                <Link href={"/about"} className={pathname.startsWith("/about") ? "active" : ""}>
                    <UserRound size={15} name="user-round" strokeWidth={2} color="#fff" />
                    <span>About</span>
                </Link>
                <Link href={"/settings"} className={pathname.startsWith("/settings") ? "active" : ""}>
                    <Settings size={15} name="settings" strokeWidth={2} color="#fff" />
                    Settings
                </Link>
                <Link href={"/contact"} className={pathname.startsWith("/contact") ? "active" : ""}>
                    <Contact size={15} name="contact" strokeWidth={2} color="#fff" />
                    Contact
                </Link>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "#fff", color: "#000", height: 35, width: 35, }}>A</Avatar>
                <Button variant="text" color="primary" startIcon={<LogOut size={15} name="user-round" strokeWidth={2} color="#fff" />}>Sign Out</Button>
            </Box>
        </Box>
    )
}

export default Navbar