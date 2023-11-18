import React, { useEffect, useState } from 'react'
import '../EventWall/EventWall.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';


export default function EventWall() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [data , setData] = useState([])
    useEffect(() => {
       axios.get('http://localhost:3004/events') 
       .then(res => setData(res.data))
       .catch(err => console.log(err));
    },[])

  return (
    <>
      <div className="container" ><br/>
                <div className="row">


                    {
                        data && data.map(
                            (d, i) => {
                                return (

                                    <div className="col-lg-4" key={i}>
                                        <div className="card card-margin " >
                                            <div className="card-header no-border">
                                                <h5 className="card-title">{d.event_company}</h5>
                                            </div>
                                            <div className="card-body pt-0">
                                                <div className="widget-49">
                                                    <div className="widget-49-title-wrapper">
                                                        <div className="widget-49-date-primary">
                                                            <span className="widget-49-date-day">{d.date}</span>
                                                            <span className="widget-49-date-month">{d.month}</span>
                                                        </div>
                                                        <div className="widget-49-meeting-info">
                                                            <span className="widget-49-pro-title">{d.company_name}</span>
                                                            <span className="widget-49-meeting-time">{d.time}</span>
                                                        </div>
                                                    </div>
                                                    <ol className="widget-49-meeting-points">

                                                        <li className="widget-49-meeting-item"><span>Event Location = {d.location}</span></li>
                                                        <li className="widget-49-meeting-item"><span>Type Of Event = {d.event_type}</span></li>
                                                        <li className="widget-49-meeting-item"><span>Number Of Manpower = {d.manpower}</span></li>
                                                        <li className="widget-49-meeting-item"><span>Pay for one person = {d.pay_one} </span></li>
                                                        <li className="widget-49-meeting-item"><span>Pyment type = {d.pay_type} </span></li>
                                                    </ol>
                                                    <p>About Event = {d.about} </p>
                                                    <div className="widget-49-meeting-action">
                                                        <button type="button" className="btn btn-outline-success" onClick={handleClickOpen}>Interested</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        )
                    }



                </div>

            </div>
<br/>


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
