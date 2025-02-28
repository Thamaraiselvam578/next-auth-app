import { Box, Typography, Grid2 as Grid } from '@mui/material'
import React from 'react'
import { auth } from '@/auth'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Barchart from '../components/Barchart';
import RadialChart from '../components/Radialchart';

const Home = async () => {
    const session = await auth()

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ my: 2, "& span": { color: "warning.main" } }}>Hello <span>{session?.user?.name}</span>!</Typography>
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    {
                        ["Pending", "Completed", "All Posts", "Post Created"].map(ele => {
                            return <Grid key={ele} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                                <Card>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">{ele}</Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        })
                    }
                    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Posts Created</Typography>
                                <Box>
                                    <Barchart />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Task</Typography>
                                <Box>
                                    <RadialChart />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home