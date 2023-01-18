import React from 'react'
import headshot from '../assets/images/headshotsqr.jpg';

const About = () => {
  return (
    <div className="p-2 m-2 vh-100">
      <div className='row'>
        <img src={headshot} alt='headshot' className='col-lg-2 col-xxl-2 rounded-circle'/>
        <p className='col-lg-10 col-xxl-10'>
          My name is Nicolas. I am a fullstack developer based in Charlotte, NC. 
        </p>
      </div>
    </div>
  )
}

export default About;