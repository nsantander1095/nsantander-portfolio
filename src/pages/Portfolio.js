import React from 'react'

const Portfolio = () => {
  return (
    <div className="m-2 p-2 vh-100">
      <h2>Portfolio</h2>
      <div className='card' style={{width: 500}}>
        <div className='card-body'>
          <h5 className='card-title'>Slo-Gram</h5>
          <p className='card-text'>An Instagram clone using Handlebars for page views, Express/mySQL for the server, image hosting through Cloudinary, and image uploading through Multer node module.</p>
          <p className='card-text'>My role on this collaborative project was centered heavily around the layout of the website with some backend work revolving around teh ability to add and remove friends.</p>
          <a href='https://github.com/BBelk/Not-Insta' className='btn btn-info'>GitHub</a>
        </div>
      </div>
      <div className='card' style={{width: 500}}>
        <div className='card-body'>
          <h5 className='card-title'>Memory Game</h5>
          <p className='card-text'>Full MERN Stack application taking the form of a card flipping memory game. Relies on a globally state managed game engine that keeps track of scores, flips and any other pertinent metrics for the game.</p>
          <p className='card-text'>My role on this collaborative project was mainly building out the layouts for the game as well as making it responsive. I also was heavily invovled in switching the game over to a gloabally state managed engine from the original structure.</p>
          <a href='https://github.com/BBelk/Memory-Game' className='btn btn-info'>Github</a>
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