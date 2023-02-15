import React from 'react'

const Resume = () => {
  return (
    <div className="container-fluid p-3 mx-auto min-vh-100">
      <div className='text-center mb-5'>
        <h2>Resume</h2>
        <p className='text-center'>
          To see a full copy of my resume, please visit this link:
        </p>
        <a href="https://docs.google.com/document/d/1qlzMxhHK2PdjINai0LnI2kz4cSMil9enJgaU4zOF-_Q/edit" style={{color: '#ffff'}}>My Resume</a>
      </div>
      <div className='row mt-2 justify-content-center'>
        <div className='card p-0 col-12 col-xxl-6 mb-5' style={{width: '30rem', backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <div className='card-body'>
            <h3 className='card-title'>Front End Skills</h3>
            <ul className='card-text'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>Photoshop</li>
              <li>Git</li>
              <li>Other Technical Concepts</li>
                <ul>
                  <li>Object-oriented Programming</li>
                  <li>Object-relational mapping</li>
                  <li>Model-View-Controller</li>
                  <li>Progressive Web Applications</li>
                </ul>
            </ul>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-6 mb-5 mx-5' style={{width: '30rem', backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <div className='card-body'>
            <h3 className='card-title'>Back End Skills</h3>
            <ul className='card-text'>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>Jest</li>
              <li>ESLint</li>
              <li>MongoDB Atlas</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>State Management</li>
              <li>Web, third-party, and REST APIs</li>
            </ul>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-6 mb-5' style={{width: '30rem', backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <div className='card-body'>
            <h3 className='card-title'>Soft Skills</h3>
            <ul className='card-text'>
              <li>Excellent Written and Verbal Communication</li>
              <li>Team Player</li>
              <li>Extensive Customer Service experience</li>
              <li>Strong interpersonal skills</li>
              <li>Attention to detail</li>
              <li>Excellent time management</li>
              <li>Emotional Intelligence</li>
              <li>Adaptibility, flexibility, and not afraid to take initiative</li>
              <li>Diligent, motivated, and analytically minded</li>
              <li>Respectful, confident, friendly, and reliable</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Resume;