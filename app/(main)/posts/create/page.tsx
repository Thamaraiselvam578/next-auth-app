// import CustomEditor from '@/app/?/CkEditor'?
import { Box, Button, Typography, TextField, Grid2 as Grid, Paper, Stack } from '@mui/material'
import React from 'react'

const CreatePost = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>Create Posts</Typography>
            <Typography variant="body1" color="text.secondary">Here you can create post of and pushish here other logged users will can see this.</Typography>
            <Box sx={{ mt: 3 }}>

                <form action="">
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 7 }}>
                            <TextField
                                fullWidth
                                label="Post Title"
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                multiline
                                rows={6}
                                label="Post Description"
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Paper sx={{ p: 2, borderRadius: 2, background: "#42a5f514" }}>
                                <Button LinkComponent={"label"} sx={{ width: 1, border: "1px dashed rgba(255, 255, 255, 0.42)", height: 300, borderRadius: 1 }}>
                                    
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

export default CreatePost