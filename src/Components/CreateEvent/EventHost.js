import {  TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EventHost() {
  const [values, setValues] = useState({
    event_company: '',
    date: '',
    month: '',
    company_name: '',
    time: '',
    location: '',
    event_type: '',
    manpower: '',
    pay_one: '',
    pay_type: '',
    about: ''
  })
const navigate = useNavigate();
 const handleSubmit =(event) =>{
  event.preventDefault();
            axios.post('http://localhost:3004/events',values) 
            .then(res => {
               console.log(res);
               navigate('/eventwall')
            })
            .catch(err => console.log(err));
 }



  return (
    <>
      <div className='container'><br />
        <center><h2 className='table-active'>Create a Event</h2></center>
        <form onSubmit={handleSubmit}  ><br></br>
          <div className="mb-3"  >
            <TextField required id="standard-basic" className="form-control" label="Event company Name" variant="standard"  onChange={e => setValues({...values, event_company: e.target.value})} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Event Location" variant="standard" onChange={e => setValues({...values, location: e.target.value})}/>
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Time" variant="standard" onChange={e => setValues({...values, time: e.target.value})} />
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Date" variant="standard"  onChange={e => setValues({...values, date: e.target.value})}/>
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Month" variant="standard" onChange={e => setValues({...values, month: e.target.value})} />
          </div>
          <div className="mb-3">
          <TextField required id="standard-basic" className="form-control" label="Type of Event" variant="standard" onChange={e => setValues({...values, event_type: e.target.value})} />
           
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" label="Number Of Manpower" className="form-control" variant="standard" onChange={e => setValues({...values, manpower: e.target.value})} />
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" label="Pay for one person" className="form-control" variant="standard"  onChange={e => setValues({...values, pay_one: e.target.value})}/>
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" label="Pyment type" className="form-control" variant="standard" onChange={e => setValues({...values, pay_type: e.target.value})} />
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" label="Company Name" className="form-control" variant="standard"  onChange={e => setValues({...values, company_name: e.target.value})}/>
          </div>
          <div className="mb-3">
            <TextField required
              className="form-control"
              id="filled-multiline-static"
              label="About Event"
              multiline
              rows={4}
              variant="filled"
              onChange={e => setValues({...values, about: e.target.value})}
            />
          </div>
          <center><button type="submit" className="btn btn-primary">Submit</button></center><br />
        </form>
      </div>
    </>
  )
}
