import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type props = {
    open: boolean,
    title: string,
    text: string,
    children: React.ReactElement<any, any>
}

export default function ConfirmPopup(props: props) {
    const { open, title, text, children } = props

    return (
        <Dialog
            open={open}
            aria-modal="true"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <>
                    {children}
                </>
            </DialogActions>
        </Dialog>
    );
}
