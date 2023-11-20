import React from 'react'
import Slider from './Slider'
import EventWall from '../EventWall/EventWall'


export default function Home() {
  return (
    <>
    
      <Slider/><br/>
      
      <h1 className='text-center'> Event Wall</h1>
      <EventWall/>
      

    </>
  )
}
