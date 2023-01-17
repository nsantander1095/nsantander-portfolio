import React from 'react'
import headshot from '../assets/images/headshotsqr.jpg';

const About = () => {
  return (
    <div className="p-2 m-2 vh-100">
      <img src={headshot} alt='headshot' className='rounded-circle mx-auto' style={{width: 300}}/>
      <h2 className="mb-3">About Me</h2>
      <p>
        Hello! My name is Nicolas Santander and this is my portfolio site! I am a recent graduate from the 2U Full Stack coding bootcamp that is run through UNCC. I am a Charlotte local and am looking to find work in backend web development.
      </p>
    </div>
  )
}

export default About;