"use client"
import React from 'react'
import { signInWithProviders } from '../actions'
import { Button } from '@mui/material'
import GoogleIcon from '../assets/images/google.png'
import Image from 'next/image'

const GoogleSigninButton = () => {
    return (
        <Button onClick={() => { signInWithProviders("google") }} variant="outlined" color="primary" sx={{ color: "#fff" }} fullWidth startIcon={<Image alt='googleIcon' src={GoogleIcon} width={20} height={20} />}>Google</Button>
    )
}

export default GoogleSigninButton