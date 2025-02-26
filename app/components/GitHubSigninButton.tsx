"use client"
import React from 'react'
import GithubIcon from '../assets/images/github.png'
import { signInWithProviders } from '@/app/lib/actions'
import Image from 'next/image'
import { Button } from '@mui/material'
import { alertMsg } from '@/utils/basicUtils'
import { useFormStatus } from "react-dom";

const GitHubSigninButton = () => {
    const { pending } = useFormStatus();
    return (
        <form action={async (formData: FormData) => {
            await signInWithProviders("github");
            alertMsg("Login successfull", "success")
        }}>
            <Button variant="outlined" disabled={pending} type='submit' color="primary" sx={{ color: "#fff" }} fullWidth startIcon={<Image alt='githubloho' style={{ filter: "invert(1)" }} src={GithubIcon} width={20} height={20} />}>GitHub</Button>
        </form>
    )
}

export default GitHubSigninButton
