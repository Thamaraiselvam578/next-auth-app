'use client'

import { Box, Typography, Grid2 as Grid, Button, Pagination, Stack, useTheme } from '@mui/material'
import React from 'react'
import BlogCard from '@/app/components/BlogCard'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@/app/components/TabPanel';
import Grow from '@mui/material/Grow';
import Link from 'next/link';

const Posts = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>Posts</Typography>
                <Button LinkComponent={Link} href='/posts/create' variant="contained" color="success">Create Post</Button>
            </Box>
            <Tabs
                value={value}
                onChange={(e, newValue) => { setValue(newValue) }}
                variant="scrollable"
                textColor='inherit'
                scrollButtons="auto"
                sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}
                aria-label="scrollable auto tabs example"
            >
                <Tab label="All Posts" />
                <Tab label="Your posts" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((ele, i) => {
                                return <Grid key={ele} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <BlogCard />
                                </Grid>
                            })
                        }
                    </Grid>
                    <Stack sx={{ my: 3, alignItems: "center" }}>
                        <Pagination count={10} variant="outlined" />
                    </Stack>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map(ele => {
                                return <Grid key={ele} size={{ xs: 12, sm: 6, md: 4 }}><BlogCard /></Grid>
                            })
                        }
                    </Grid>
                    <Stack sx={{ my: 3, alignItems: "center" }}>
                        <Pagination count={10} variant="outlined" />
                    </Stack>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map(ele => {
                                return <Grid key={ele} size={{ xs: 12, sm: 6, md: 4 }}><BlogCard /></Grid>
                            })
                        }
                    </Grid>
                    <Stack sx={{ my: 3, alignItems: "center" }}>
                        <Pagination count={10} variant="outlined" />
                    </Stack>
                </Box>
            </TabPanel>
        </Box>
    )
}

export default Posts