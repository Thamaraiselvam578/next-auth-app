"use client"

import { Box, Stack, Typography, Grid2 as Grid, TextField, Button, Divider } from '@mui/material'
import Image from 'next/image'
import React, { useActionState, useEffect } from 'react'
import logo from '../__assets/next.svg'
import Link from 'next/link'
import GoogleSigninButton from '@/app/components/GoogleSigninButton'
import GitHubSigninButton from '@/app/components/GitHubSigninButton'
import { signInWithCredentials } from '@/app/lib/actions'
import { alertMsg } from '@/utils/basicUtils'
import { useRouter } from 'next/navigation';

const Signin = () => {
    const [errors, onSubmit, loading] = useActionState(signInWithCredentials, { message: "", status: "" })
    const router = useRouter()

    useEffect(() => {
        if (errors.message && !loading) {
            alertMsg(errors.message, errors.status)
            if (errors.status === "success") {
                router.push("/")
            }
        }
    }, [errors, loading, router])

    return (
        <Stack sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ borderRadius: 2, background: "#f5f5f503", width: 1, maxWidth: { xs: "95%", md: "80%", lg: "60%", xl: "55%" } }}>
                <Grid container spacing={0}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ px: 2, py: { xs: 2, sm: 3, md: 4 }, borderRadius: 2, textAlign: "center" }}>
                            <Image src={logo} height={30} width={70} alt="logo" style={{ filter: "invert(1)" }} />
                            <Typography variant="body2" sx={{ opacity: .7, maxWidth: 400, mx: 'auto' }}>Signin with your crendential consectetur adipisicing elit. Porro, nemo?</Typography>
                            <Box sx={{ mt: 3 }}>
                                <form action={onSubmit}>
                                    <Stack gap={2} sx={{ textAlign: "start" }}>
                                        <Box>
                                            <Typography variant="body2" sx={{ m: 1, "& sup": { color: "error.main" } }}>Email<sup>*</sup></Typography>
                                            <TextField
                                                fullWidth
                                                type='email'
                                                name='email'
                                                required
                                                placeholder="Enter email or username"
                                            />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" sx={{ m: 1, mt: 0, "& sup": { color: "error.main" } }}>Password<sup>*</sup></Typography>
                                            <TextField
                                                fullWidth
                                                type='password'
                                                required
                                                name='password'
                                                placeholder="Enter password"
                                            />
                                        </Box>
                                        <Button variant="contained" disabled={loading as boolean} type='submit' color="primary">
                                            Signin
                                        </Button>
                                    </Stack>
                                </form>
                            </Box>
                            <Divider sx={{ my: 3 }}>
                                <Typography variant="body2" color="initial">or</Typography>
                            </Divider>
                            <Box sx={{ display: "flex", gap: 2, mb: 3, "form": { width: 1 } }}>
                                <GoogleSigninButton />
                                <GitHubSigninButton />
                            </Box>
                            <Typography variant="body2" sx={{ textAlign: "start", color: "#ffffff40", "& a": { textDecoration: "none", opacity: 1 } }}>Don't have account? <Link href={"/auth/signup"}>Register here.</Link></Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ height: 1, borderRadius: "0 8px 8px 0", background: "url(https://images.unsplash.com/photo-1726064855900-54128f083192)", backgroundSize: 'cover' }}></Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    )
}

export default Signin