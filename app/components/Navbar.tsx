"use client";
import React from 'react'
import { Avatar, Box, Button, Divider, Menu, MenuItem, IconButton, Typography, TextField } from "@mui/material";
import { Bell, Contact, Home, LogOut, Logs, Settings, Settings2, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { signout } from '@/app/lib/actions';
import { alertMsg } from '@/utils/basicUtils';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const { data } = useSession()
    const [loading, setLoading] = React.useState<Boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#000", px: 2, p: 2, boxShadow: "0px 4px 4px 0 #00000010", position: "sticky", top: 0, zIndex: 10 }}>
            <IconButton sx={{ p: 0 }}>
                <Logs />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {/* <TextField
                    size='small'
                    placeholder='Search'
                /> */}
                <IconButton sx={{ border: 1, borderColor: "divider", borderRadius: 1.5 }}>
                    <Bell />
                </IconButton>
                <IconButton onClick={handleClick} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: "#fff", color: "#000", height: 35, width: 35, }} src={data?.user?.image || "F"}>{data?.user?.name ? data?.user?.name[0].toUpperCase() : ""}</Avatar>
                </IconButton>
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
                        <Avatar src={data?.user?.image || ""} alt={data?.user?.name || ""} />
                        <Box>
                            <Typography variant="body1" color="text.primary">{data?.user?.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{data?.user?.email}</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={(e: React.MouseEvent<HTMLElement>) => { router.push('/settings'); handleClose(e) }} sx={{ gap: 2 }}>
                        <Settings size={20} /> Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem
                        color='error'
                        disabled={loading as boolean}
                        onClick={async () => {
                            try {
                                setLoading(true)
                                await signout()
                                alertMsg("You have been signed out successfully", "success")
                                setLoading(false)
                            } catch (error) {
                                setLoading(false)
                            }
                        }}
                        sx={{ gap: 2 }}
                    >
                        <LogOut size={20} /> Logout
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    )
}

export default Navbar