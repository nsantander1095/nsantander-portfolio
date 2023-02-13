import React from 'react'

// TODO: Need to style. Might be a good place to list skills: backend, frontend, and soft skills. Also have link to resume

const Resume = () => {
  return (
    <div className="container-fluid p-2 m-2 mx-auto min-vh-100">
      <div className='row mt-2 justify-content-center'>
        <div className='card p-0 col-12 col-xxl-6 mb-5' style={{width: '30rem', backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <div className='card-body'>
            <h3 className='card-title'>Front End Skills</h3>
            <p className='card-text'></p>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-6 mb-5 mx-5' style={{width: '30rem', backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <div className='card-body'>
            <h3 className='card-title'>Back End Skills</h3>
            <p className='card-text'></p>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-6 mb-5' style={{width: '30rem', backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <div className='card-body'>
            <h3 className='card-title'>Soft Skills</h3>
            <ul className='card-text'>
              <li>Excellent Written and Verbal Communication</li>
              <li>Team Player</li>
              <li>Extensive Customer Service Experience, both casual and highend</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <h2>Resume</h2>
      <p>
        To see a full copy of my resume, please visit this link:
      </p>
      <a href="https://docs.google.com/document/d/1qlzMxhHK2PdjINai0LnI2kz4cSMil9enJgaU4zOF-_Q/edit">My Resume</a> */}
    </div>
  )
}

export default Resume;