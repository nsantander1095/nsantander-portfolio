import React from 'react'
import headshot from '../assets/images/headshotsqr.jpg';

const About = () => {
  return (
    <div className="p-2 m-2 vh-100">
      <div className='row justify-content-center'>
        <img src={headshot} alt='headshot' className='col-12 mb-5 rounded-circle' style={{width: 300}}/>
        <p className='text-center col-12'>
          My name is Nicolas. I am a fullstack developer based in Charlotte, NC. 
        </p>
      </div>
    </div>
  )
}

export default About;