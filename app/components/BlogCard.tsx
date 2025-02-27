"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';;
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, purple, orange } from '@mui/material/colors';
import { ChevronDown, Heart, EllipsisVertical, MessageSquareText, Trash, Edit } from 'lucide-react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';


export default function BlogCard() {
    const [expanded, setExpanded] = React.useState<null | HTMLElement>(null);
    const handleClose = () => {
        setExpanded(null)
    }
    return (
        <Card sx={{ maxWidth: 1 }}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: orange[900] }} src={`https://randomuser.me/api/`}> R</Avatar>}
                action={
                    <IconButton onClick={(event: React.MouseEvent<HTMLElement>) => setExpanded(event.currentTarget)}>
                        <EllipsisVertical />
                    </IconButton>
                }
                title={"Shrimp and Chorizo Paella"}
                subheader={"September 14, 2016"}
            />
            <CardMedia
                component="img"
                height="194"
                key={Math.random().toString()}
                image={"https://picsum.photos/1920/1080?random"}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Heart />
                </IconButton>
                <IconButton aria-label="share">
                    <MessageSquareText />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Button href={`/posts/${1}`} color='success'>
                    Read More
                </Button>
            </CardActions>
            <Menu
                anchorEl={expanded}
                open={Boolean(expanded)}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
                    <Edit size={20} /> Edit
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ gap: 2, color: "error.main" }}>
                    <Trash size={20} color='currentColor' /> Delete
                </MenuItem>
            </Menu>
        </Card>
    );
}
