"use client";
import React from 'react'
import { Avatar, Box, Button, Divider, Menu, MenuItem, IconButton, Typography, Stack } from "@mui/material";
import { Contact, Home, LayoutList, LogOut, Settings, Settings2, StickyNote, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { signout } from '@/app/lib/actions';
import { alertMsg } from '@/utils/basicUtils';
import { useSession } from "next-auth/react"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SideBar = () => {
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
        <Stack sx={{ minWidth: 250, width: 250, height: "100vh", bgcolor: "background.paper" }}>
            <Box sx={{ m: 4 }}>
                <Image src={'./next.svg'} height={30} width={70} alt="logo" style={{ filter: "invert(1)" }} />
            </Box>
            <Stack sx={{ px: 2, flexGrow: 1 }}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }} component="nav">
                    <ListItemButton href={"/"} selected={pathname === "/"}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton href={"/posts"} selected={pathname.startsWith("/posts")}>
                        <ListItemIcon>
                            <StickyNote />
                        </ListItemIcon>
                        <ListItemText primary="Posts" />
                    </ListItemButton>
                    <ListItemButton href={"/tasks"} selected={pathname.startsWith("/tasks")}>
                        <ListItemIcon>
                            <LayoutList />
                        </ListItemIcon>
                        <ListItemText primary="Tasks" />
                    </ListItemButton>
                    <ListItemButton href={"/settings"} selected={pathname.startsWith("/settings")}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton href={"/contact"} selected={pathname.startsWith("/contact")}>
                        <ListItemIcon>
                            <Contact />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </List>
            </Stack>
            <Stack sx={{ m: 3, alignItems: "start" }}>
                <IconButton onClick={handleClick} sx={{ p: 0, mb: 1 }}>
                    <Avatar sx={{ bgcolor: "#fff", color: "#000", height: 35, width: 35, }} src={data?.user?.image || "F"}>{data?.user?.name ? data?.user?.name[0].toUpperCase() : ""}</Avatar>
                </IconButton>
                <Typography variant="body1" color="text.primary">{data?.user?.name}</Typography>
                <Typography variant="body2" sx={{ fontSize: 12 }} color="text.secondary">{data?.user?.email}</Typography>
                {/* <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
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
                </Menu> */}
            </Stack>
        </Stack>
    )
}

export default SideBar