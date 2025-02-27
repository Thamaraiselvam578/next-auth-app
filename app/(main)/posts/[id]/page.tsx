import { Box } from '@mui/material'
import React from 'react'

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    return (
        <Box sx={{ p: 3 }}>
            Post {id}
        </Box>
    )
}

export default Post
