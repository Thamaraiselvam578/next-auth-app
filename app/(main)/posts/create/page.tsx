"use client"

import { fileToURL } from '@/utils/basicUtils'
import { Box, Button, Typography, TextField, Grid2 as Grid, Paper, Stack, CircularProgress } from '@mui/material'
import { ImageUp, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const CreatePost = () => {
    const [file, setFile] = useState<string>("");
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
    console.log('uploadedFiles: ', uploadedFiles);
    const [uploading, setUploading] = useState(false)
    const [uploadingFiles, setUploadingFiles] = useState<any[]>([]);
    console.log('uploadingFiles: ', uploadingFiles);

    async function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
        try {
            setUploading(true)
            const target = e.target as HTMLInputElement & { files: FileList }
            const src = await fileToURL(target.files[0]);
            setFile(src as string)
            setUploading(false)
        } catch (error) {
            setUploading(false)
            console.error(error);
        }
    }

    async function uploadFiles(e: React.FormEvent<HTMLInputElement>) {
        try {
            const target = e.target as HTMLInputElement & { files: FileList }
            const files = [...target.files]

            let temp = files.map((newFile, index) => ({
                id: `${newFile.name}${uploadedFiles.length + index + 1}`,
                url: "",
                name: newFile.name,
                uploaded: false
            }))

            setUploadingFiles(temp)

            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                const src = await fileToURL(file);
                await setUploadingFiles(prev => {
                    prev[i].url = src
                    prev[i].uploaded = true
                    return [...prev]
                })
                temp[i].url = src
                temp[i].uploaded = true
            }

            setUploadedFiles(prev => [...prev, ...temp])
            setUploadingFiles([])
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>Create Posts</Typography>
            <Typography variant="body1" color="text.secondary">Here you can create post of and pushish here other logged users will can see this.</Typography>
            <Box sx={{ mt: 3 }}>
                <form action="">
                    <Stack direction={"row"} sx={{ alignItems: "start", gap: 2 }}>
                        <Paper sx={{ p: 2, borderRadius: 2, background: "#42a5f514", minWidth: 150, }}>
                            <Button component="label" sx={{ background: `url(${file}) 100% no-repeat center`, textAlign: "center", textTransform: "none", width: 1, border: "1px dashed rgba(255, 255, 255, 0.42)", height: 150, borderRadius: 1, alignItems: "center", justifyContent: "center", gap: 1, flexDirection: "column" }}>
                                <input type="file" hidden accept='.jpg,.jpeg' onChange={handleOnChange} />
                                {
                                    uploading ? <CircularProgress size={25} /> :
                                        <>
                                            <ImageUp size={40} />
                                            <Typography sx={{ fontSize: 14 }}>Upload <br />thumbnail</Typography>
                                        </>
                                }
                            </Button>
                        </Paper>
                        <Box sx={{ flexGrow: 1 }}>
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
                                        rows={8}
                                        label="Post Description"
                                        required
                                    />
                                </Grid>
                                {(uploadedFiles.length > 0 || uploadingFiles.length > 0) &&
                                    <Grid size={{ xs: 12 }}>
                                        <Stack sx={{ flexDirection: "row", gap: 1, p: 1, bgcolor: "#41414161", borderRadius: 1, }}>
                                            {uploadedFiles.map((img, i) => (
                                                <Box key={i} sx={{ height: 80, width: 80, borderRadius: 1, bgcolor: "#fff" }}>
                                                    <Image src={img.url} alt="random" height={80} width={80} style={{ objectFit: "cover", borderRadius: "4px" }} />
                                                </Box>
                                            ))}
                                            {uploadingFiles.map((img, i) => (
                                                <Stack key={i} sx={{ height: 80, width: 80, borderRadius: 1, bgcolor: "#fff", alignItems: "center", justifyContent: "center" }}>
                                                    {
                                                        img.uploaded ?
                                                            <Image src={img.url} alt="random" height={80} width={80} style={{ objectFit: "cover", borderRadius: "4px" }} /> :
                                                            <CircularProgress size="25px" color='primary' />
                                                    }
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </Grid>
                                }
                                <Grid size={{ xs: 12 }}>
                                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                        <Button startIcon={<Upload size={16} />} component="label" variant="contained" color="primary">
                                            <input type="file" accept='.jpg, .jpeg, .png' multiple hidden onChange={uploadFiles} />
                                            Add Photos
                                        </Button>
                                        <Box sx={{ textAlign: "end", flexGrow: 1 }}>
                                            <Button variant="contained" color="error" sx={{ mr: 1 }}>Cancel</Button>
                                            <Button variant="contained" disabled={uploadingFiles.length > 0 || uploading} color="success">Save</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                </form>
            </Box>
        </Box>
    )
}

export default CreatePost