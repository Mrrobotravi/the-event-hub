import React from 'react'
import '../EventWall/EventWall.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function OpneHandel() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <>
     <button type="button"    className="btn btn-outline-success" onClick={handleClickOpen}>Interested</button>   
     <div>




<Dialog open={open} onClose={handleClose}>
    <DialogTitle>Interested</DialogTitle>
    <DialogContent>
        <DialogContentText>
            To Interested to this Event, please enter your email address and contact details here. We
            will send updates occasionally.
        </DialogContentText><br />

        <TextField
            required
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"

        />
        <TextField
            required
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            
        />
        <TextField
            required
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Contact Number"
            type="number"
            fullWidth
            variant="outlined"
        /><div>
            <TextField required
                className="form-control"
                id="outlined-basic"
                label="About"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                margin="dense"
            />
        </div>
    </DialogContent>
    <DialogActions>

        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleClose}>Submit</Button>
    </DialogActions>
</Dialog>
</div>
    </>
  )
}
