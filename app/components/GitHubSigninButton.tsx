"use client"
import React from 'react'
import GithubIcon from '../assets/images/github.png'
import { signInWithProviders } from '@/app/actions'
import Image from 'next/image'
import { Button } from '@mui/material'

const GitHubSigninButton = () => {
    return (
        <Button onClick={async () => { signInWithProviders("github"); }} variant="outlined" color="primary" sx={{ color: "#fff" }} fullWidth startIcon={<Image alt='githubloho' style={{ filter: "invert(1)" }} src={GithubIcon} width={20} height={20} />}>GitHub</Button>
    )
}

export default GitHubSigninButton
