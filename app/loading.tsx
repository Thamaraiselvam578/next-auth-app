import { Box } from '@mui/material'
import React from 'react'
import styles from "./loading.module.css"

const loading = () => {
    return (
        <Box sx={{ position: "fixed", inset: 0, zIndex: 10000, bgcolor: "#0000", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 240 240" height="240" width="240" className={styles.pl}>
                <circle strokeLinecap="round" strokeDashoffset="-330" strokeDasharray="0 660" strokeWidth="20" stroke="#000" fill="none" r="105" cy="120" cx="120" className={`${styles.pl__ring} ${styles['pl__ring--a']}`}></circle>
                <circle strokeLinecap="round" strokeDashoffset="-110" strokeDasharray="0 220" strokeWidth="20" stroke="#000" fill="none" r="35" cy="120" cx="120" className={`${styles.pl__ring} ${styles['pl__ring--b']}`}></circle>
                <circle strokeLinecap="round" strokeDasharray="0 440" strokeWidth="20" stroke="#000" fill="none" r="70" cy="120" cx="85" className={`${styles.pl__ring} ${styles['pl__ring--c']}`}></circle>
                <circle strokeLinecap="round" strokeDasharray="0 440" strokeWidth="20" stroke="#000" fill="none" r="70" cy="120" cx="155" className={`${styles.pl__ring} ${styles['pl__ring--d']}`}></circle>
            </svg>
        </Box>
    )
}

export default loading
