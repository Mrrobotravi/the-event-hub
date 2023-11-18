import React from 'react'
import  { useEffect, useState } from 'react'
import '../EventWall/EventWall.css'
import axios from 'axios';

export default function Interested() {
    const [data , setData] = useState([])
    useEffect(() => {
       axios.get('http://localhost:3004/events') 
       .then(res => setData(res.data))
       .catch(err => console.log(err));
    },[])

    // const navigate = useNavigate();
      
    const handleDelete = (id)=>{
        const confirm = window.confirm("Would you Like to Delete ?");
        if(confirm){
            axios.delete('http://localhost:3004/events/'+id) 
            .then(res => {
                // navigate('/')
                window.location.reload();
            })
            .catch(err => console.log(err));
     }
    }
  return (
    <>
    <center><h1>Interested On Event</h1></center>
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
                                                        <button type="button" onClick={e => handleDelete(d.id)} className="btn btn-outline-danger" >Delete Evnet</button>
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
    </>
  )
}
