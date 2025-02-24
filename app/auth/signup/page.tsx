"use client"

import { Box, Stack, Typography, Grid2 as Grid, TextField, Button, Divider } from '@mui/material'
import Image from 'next/image'
import React, { useActionState } from 'react'
import logo from '../__assets/next.svg'
import Link from 'next/link'
import GoogleSigninButton from '@/app/components/GoogleSigninButton'
import GitHubSigninButton from '@/app/components/GitHubSigninButton'
import { signUpWithCredentials } from '@/app/actions'

const SignIn = () => {
    const [state, formAction, isPending] = useActionState(signUpWithCredentials, { message: "" })
    return (
        <Stack sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ borderRadius: 2, background: "#f5f5f503", width: 1, maxWidth: { xs: "95%", md: "80%", lg: "60%" } }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ height: 1, borderRadius: "8px 0 0px 8px", background: "url(https://images.unsplash.com/photo-1739208831882-8be117b564ce?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundSize: 'cover' }}></Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ px: 2, py: { xs: 2, sm: 3, md: 4 }, borderRadius: 2, textAlign: "center" }}>
                            <Image src={logo} height={30} width={70} alt="logo" style={{ filter: "invert(1)" }} />
                            <Typography variant="body2" sx={{ opacity: .7, maxWidth: 400, mx: 'auto' }}>Signin with your crendential consectetur adipisicing elit. Porro, nemo?</Typography>
                            <Box sx={{ mt: 3 }}>
                                <form action={formAction}>
                                    <Stack gap={2} sx={{ textAlign: "start" }}>
                                        <Box>
                                            <Typography variant="body2" sx={{ m: 1, "& sup": { color: "error.main" } }}>Name<sup>*</sup></Typography>
                                            <TextField
                                                fullWidth
                                                required
                                                name='name'
                                                placeholder="Enter Name"
                                            />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" sx={{ m: 1, "& sup": { color: "error.main" } }}>Email<sup>*</sup></Typography>
                                            <TextField
                                                fullWidth
                                                required
                                                name='email'
                                                type='email'
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
                                            {/* <Box sx={{ textAlign: "end", mt:.5 }}>
                                                <Typography component="small" sx={{ fontSize: 12 }} color="initial">Forgot password?</Typography>
                                            </Box> */}
                                        </Box>
                                        <Button variant="contained" disabled={isPending} type='submit' color="primary">
                                            Signup
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
                            <Typography variant="body2" sx={{ textAlign: "start", color: "#ffffff40", "& a": { textDecoration: "none", opacity: 1 } }}>Already have account? <Link href={"/auth/signin"}>Signin here.</Link></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    )
}

export default SignIn