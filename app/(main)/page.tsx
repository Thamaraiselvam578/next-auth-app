import { Box, Typography, Grid2 as Grid } from '@mui/material'
import React from 'react'
import BlogCard from '../components/BlogCard'

const Home = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mt: 2 }}>Home Page</Typography>
            <Grid container spacing={2}>
                {
                    [1, 2, 3, 4, 5, 6, 7].map(ele => {
                        return <Grid key={ele} size={{ xs: 12, sm: 6, md: 4 }}><BlogCard /></Grid>
                    })
                }

            </Grid>
        </Box>
    )
}

export default Home