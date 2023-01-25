import React from 'react'

const Portfolio = () => {
  return (
    <div className="m-2 p-2 vh-100">
      <h2>Portfolio</h2>
      <div className='card' style={{width: 500}}>
        <div className='card-body'>
          <h5 className='card-title'>Text Editor PWA</h5>
          <p className='card-text'>A fully functional progressive web application for any text editing needs.</p>
          <a href='https://github.com/nsantander1095/pwa-text-editor-refactor-project' className='btn btn-info'>GitHub</a>
        </div>
      </div>
      <ul>
        <li>
          <p>Project 1: <a href="https://github.com/nsantander1095/pwa-text-editor-refactor-project">Text Editor PWA</a></p>
          
        </li>
        <li>
          <p>Project 2: <a href="https://github.com/nsantander1095/social-network-api-project">Social Network API</a></p>

        </li>
        <li>
          <p>Project 3: <a href="https://github.com/nsantander1095/ecommerce-backend-refactor-project">Ecommerce Backend RESTful API</a></p>
          
        </li>
        <li>
          <p>Project 4: <a href="https://github.com/nsantander1095/employee-tracker-project">Employee Tracker</a></p>
          
        </li>
      </ul>

    </div>
  )
}

export default Portfolio;