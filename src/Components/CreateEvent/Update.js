import {  TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Update() {
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
  const { id } = useParams();
  useEffect(() => {
      axios.get('http://localhost:3004/events/' + id)
          .then(res => {
              setValues(res.data);
          })
          .catch(err => console.log(err));
  }, [])

  const navigate = useNavigate();
  const handleUpdate= (event) =>{
      event.preventDefault();
          axios.put('http://localhost:3004/events/'+id,values) 
          .then(res => {
             console.log(res);
             navigate('/interested')
          })
          .catch(err => console.log(err));
  }


  return (
    <>
     
      <div className='container'><br />
        <center><h2 className='table-active'>Update Your Event</h2></center>
        <form onSubmit={handleUpdate} ><br></br>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Event company Name" variant="standard" value={values.event_company} onChange={e => setValues({...values, event_company: e.target.value})}  />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Event Location" variant="standard" value={values.location}  onChange={e => setValues({...values, location: e.target.value})}/>
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Time" variant="standard" value={values.time}  onChange={e => setValues({...values, time: e.target.value})} />
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Date" variant="standard"  value={values.date}  onChange={e => setValues({...values, date: e.target.value})}/>
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" className="form-control" label="Month" variant="standard" value={values.month}  onChange={e => setValues({...values, month: e.target.value})} />
          </div>
          <div className="mb-3">
          <TextField required id="standard-basic" className="form-control" label="Type of Event" variant="standard" value={values.event_type}  onChange={e => setValues({...values, event_type: e.target.value})} />
           
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" label="Number Of Manpower" className="form-control" variant="standard" value={values.manpower}  onChange={e => setValues({...values, manpower: e.target.value})} />
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" label="Pay for one person" className="form-control" variant="standard"  value={values.pay_one}  onChange={e => setValues({...values, pay_one: e.target.value})}/>
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" label="Pyment type" className="form-control" variant="standard" value={values.pay_type}  onChange={e => setValues({...values, pay_type: e.target.value})} />
          </div>
          <div className="mb-3">
            <TextField required id="standard-basic" label="Company Name" className="form-control" variant="standard"  value={values.company_name}  onChange={e => setValues({...values, company_name: e.target.value})}/>
          </div>
          <div className="mb-3">
            <TextField required
              className="form-control"
              id="filled-multiline-static"
              label="About Event"
              multiline
              rows={4}
              variant="filled"
              value={values.about} 
              onChange={e => setValues({...values, about: e.target.value})}
            />
          </div>
          <center><button type="submit" className="btn m-2 btn-primary">Submit</button>
          <Link to="/interested" class="btn  m-2 btn-secondary">Back</Link></center><br />
        </form>
      </div>
    </>
  )
}

