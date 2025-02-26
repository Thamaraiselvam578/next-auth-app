"use client";
import React from 'react'
import { Avatar, Box, Button, Divider, Menu, MenuItem, IconButton, Typography } from "@mui/material";
import { Contact, Home, LogOut, Settings, Settings2, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { signout } from '@/app/lib/actions';
import { alertMsg } from '@/utils/basicUtils';
import { useSession } from "next-auth/react"

const Navbar = () => {
    const { data } = useSession()
    const pathname = usePathname()
    const [loading, setLoading] = React.useState<Boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    transition: ".3s",
                    "&:hover, &.active": {
                        fontWeight: "500 !important",
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
                <IconButton onClick={handleClick} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: "#fff", color: "#000", height: 35, width: 35, }} src={data.user?.image || "F"}>{data.user?.name[0].toUpperCase()}</Avatar>
                </IconButton>
                {/* <Button
                    
                    variant="text"
                    color="primary"
                    disabled={loading as boolean}
                    startIcon={<LogOut size={15} name="user-round" strokeWidth={2} color="#fff" />}>
                    Sign Out
                </Button> */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                p: 0,
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar src={data?.user?.image} alt={data?.user?.name} />
                        <Box>
                            <Typography variant="body1" color="text.primary">{data?.user?.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{data?.user?.email}</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
                        <Settings size={20} /> Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem color='error' onClick={async () => {
                        try {
                            setLoading(true)
                            await signout()
                            alertMsg("You have been signed out successfully", "success")
                            setLoading(false)
                        } catch (error) {
                            setLoading(false)
                        }
                    }} sx={{ gap: 2 }}>
                        <LogOut size={20} /> Logout
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    )
}

export default Navbar