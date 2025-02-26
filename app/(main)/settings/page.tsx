"use client"

import ConfirmPopup from '@/app/components/ConfirmPopup'
import { Box, Typography, Grid2 as Grid, TextField, Button, Stack, Avatar, Divider, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import { Camera, Lock, Trash } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

const Settings = () => {
    const { data: { user }, update } = useSession()
    const [passwordModal, setPasswordModal] = useState<boolean>(false)
    const [showPop, setShowPop] = useState<boolean>(false)

    return (
        <Box sx={{ mt: 5, mb: 2 }}>
            <Box sx={{ ml: 2 }}>
                <Typography variant="h3" color="text.primary">Update Profile</Typography>
                <Typography variant="body1" sx={{ maxWidth: 800, mt: 1, "& span": { color: "text.primary", textTransform: "capitalize" } }} color="text.secondary">Hello <span>{user.name}</span>! here is your profile setting sit amet consecteturaesentium quia? Corrupti, dignissimos commodi. Illum quos recusandae nulla placeat voluptatem nemo a itaque?</Typography>
            </Box>
            <Box sx={{ mt: 5 }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ px: 2, py: { xs: 2, sm: 3, md: 4 }, borderRadius: 2, bgcolor: "#000" }}>
                            <form action="" style={{ width: "100%" }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="First name"
                                            name=""
                                            defaultValue={user.name || ""}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Last name"
                                            name=""
                                            defaultValue={user?.last_name || ""}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            label="Email"
                                            name=""
                                            defaultValue={user.email || ""}
                                            required
                                            type="email"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Phone No"
                                            name=""
                                            defaultValue={user.phone_number || ""}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Street"
                                            name=""
                                            defaultValue={user.street || ""}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="City"
                                            name=""
                                            defaultValue={user.city || ""}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="State"
                                            name=""
                                            defaultValue={user.state || ""}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Country"
                                            name=""
                                            defaultValue={user.country || ""}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Zipcode"
                                            name=""
                                            defaultValue={user.zipcode || ""}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Button variant="contained" color="success" type='submit'>Save Profile</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack sx={{ overflow: "hidden", borderRadius: 2, bgcolor: "#000", height: 1 }}>
                            <Box sx={{ p: 3, background: "url(https://images.unsplash.com/vector-1738290704915-612277470265)", backgroundSize: "cover" }}>
                                <Box sx={{ height: 100 }} />
                            </Box>
                            <Box sx={{ p: 2, position: "relative" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1 }}>
                                        <Avatar src={user?.image || ""} sx={{ border: 2, borderColor: "#fff", height: 45, width: 45 }} />
                                        <Box>
                                            <Typography variant="body1" color="text.primary" sx={{ textTrasform: "capitalize" }}>{user.name} {user.last_name || ""}</Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ textTrasform: "capitalize" }}>{user.email}</Typography>
                                        </Box>
                                    </Box>
                                    {/* <Button variant="outlined" startIcon={<Camera size={18} />} size='small' color="primary">Profile pic</Button> */}
                                </Box>
                                <Divider sx={{ mb: 6, mt: 2 }} />
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: { xs: "wrap", md: "nowrap" } }}>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="body1" color="text.primary">Password settings</Typography>
                                        <Typography variant="body2" color="text.secondary">Here is an above button to reset password.</Typography>
                                    </Box>
                                    <Button variant="contained" onClick={e => setPasswordModal(true)} startIcon={<Lock size={18} />} sx={{ whiteSpace: "nowrap" }} size='small' color="success">Reset Password</Button>
                                </Box>
                                <Divider sx={{ my: 2 }} />
                                <Box sx={{ display: "flex", alignItems: "end", gap: 1, flexWrap: { xs: "wrap", md: "nowrap" } }}>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="body1" color="text.primary">Delete Account</Typography>
                                        <Typography variant="body2" color="text.secondary">Want to delete account.</Typography>
                                    </Box>
                                    <Button variant="contained" onClick={e => { setShowPop(true) }} color="error" startIcon={<Trash size={18} />} sx={{ whiteSpace: "nowrap" }} size='small'>Delete Account</Button>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Dialog
                onClose={e => setPasswordModal(false)}
                open={passwordModal}
                PaperProps={{
                    sx: { width: { xs: "90%", sm: 400, md: 600 } }
                }}
            >
                <DialogTitle sx={{ pb: 0 }}>Update Password</DialogTitle>
                <DialogContent>
                    <DialogContentText>Use current password to create new password. Forgot password? <Link href={"#"} style={{ color: "#fff" }}>Resset here.</Link></DialogContentText>
                    <Box sx={{ mt: 2 }}>
                        <form action="">
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Current password"
                                        name=""
                                        defaultValue={user.zipcode || ""}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="New password"
                                        name=""
                                        defaultValue={user.zipcode || ""}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Confrim new password"
                                        name=""
                                        defaultValue={user.zipcode || ""}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Box sx={{ textAlign: "right", alignContent: "end" }}>
                                        <Button variant="outlined" onClick={e => setPasswordModal(false)} type='reset' color="error" sx={{ mr: 1 }}>Cancel</Button>
                                        <Button variant="contained" onClick={e => setPasswordModal(false)} type='submit' color="primary">update</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </DialogContent>
            </Dialog>

            <ConfirmPopup
                open={showPop}
                title='Confirm Delete Account?'
                text={`Are you sure want delete account. All the content of will be deleted permenently. You're can undo this process, are you sure about this.`}
            >
                <Box sx={{ textAlign: "right" }}>
                    <form action="" style={{ width: "100%" }}>
                        <TextField
                            label={`Please type "CONFIRM"`}
                            variant='standard'
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <Button variant="outlined" onClick={e => setShowPop(false)} type='reset' color="error" sx={{ mr: 1 }}>Cancel</Button>
                        <Button variant="contained" onClick={e => setShowPop(false)} type='submit' color="error">Procced</Button>
                    </form>
                </Box>
            </ConfirmPopup>
        </Box>
    )
}

export default Settings