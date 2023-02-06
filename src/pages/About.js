import React from 'react'
import headshot from '../assets/images/headshotsqr.jpg';

const About = () => {
  return (
    <div className="container-fluid p-2 m-2 min-vh-100">
      <div className='row justify-content-center'>
        <div className='col-12 text-center mb-5 mt-5'>
          <img src={headshot} alt='headshot' className='rounded-circle' style={{width: '20rem'}}/>
        </div>
        <p className='text-center col-12 col-xxl-12' style={{width: '30rem'}}>
          My name is Nicolas. I am a Full Stack web developer with a background in engineering and customer service. Trained at the University of North Carolina in Charlotte and received a certificate in Full Stack Web Development. Received a Bachelors of Science in Engineering Physics with a Minor in Applied Math. Extensive high-end customer service skills.
        </p>
      </div>
    </div>
  )
}

export default About;