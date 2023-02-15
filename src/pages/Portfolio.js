import React from 'react'
import slogram from '../assets/images/slowgram-screenshot.png'
import memgame from '../assets/images/screenshot.png'
import gitpub from '../assets/images/gitpub-screenshot.png'
import socapi from '../assets/images/social-network-api.png'
import portfolio from '../assets/images/portfolio-screenshot.png'
import emptrack from '../assets/images/emp-tracker.png'

// TODO: Rewrite cards, add technologies used, add icons from fontawesome

const Portfolio = () => {
  return (
    <div className="container-fluid p-3 mx-auto min-vh-100">
      <div className='row mt-5 justify-content-around'>
        <div className='card p-0 col-12 col-xxl-4 mb-5' style={{width: "30rem", backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <img src={slogram} className='card-img-top' alt='slo-gram-screenshot'></img>
          <div className='card-body'>
            <h4 className='card-title'>Slo-Gram</h4>
            <h6 className='card-subtitle mb-2'>Collaborative, Full-Stack</h6>
            <hr></hr>
            <p className='card-text'>An Instagram clone using Handlebars for page views, Express/MySQL for the server, image hosting through Cloudinary, and image uploading through Multer node module.</p>
            <p className='card-text fs-5'>My role:</p>
            <ul className='card-text' style={{listStyleType: 'none'}}>
              <li>Centered heavily around the layout of all of the pages on the site, with a fair amount of backend work in routing and the functionality to add and remove friends.</li>
            </ul>
            {/* <p className='card-text'>My role: on this collaborative project was centered heavily around the layout of the website with some backend work revolving around teh ability to add and remove friends.</p> */}
            <p className='card-text fs-5'>Tech used:</p>
            <ul className='card-text'>
              <li>Cloudinary</li>
              <li>Multer</li>
              <li>MySQL</li>
              <li>Express.js</li>
              <li>Handlebars</li>
              <li>Sequelize ORM</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
              <li>Heroku</li>
            </ul>
            <a target='_blank' rel='noopner noreferrer' href='https://github.com/BBelk/Not-Insta' className='btn btn-dark'>GitHub</a>
            <a target='_blank' rel='noopner noreferrer' href='https://thawing-springs-27251.herokuapp.com/' className='btn btn-dark mx-2' style={{backgroundColor: '#1b082b'}}>Live Site</a>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-4 mb-5' style={{width: "30rem", backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <img src={memgame} className='card-img-top' alt='memory-game-screenshot'></img>
          <div className='card-body'>
            <h4 className='card-title'>Memory Game</h4>
            <h6 className='card-subtitle mb-2'>Collaborative, Full-Stack</h6>
            <hr></hr>
            <p className='card-text'>Full MERN Stack application taking the form of a card flipping memory game. Relies on a globally state managed game engine that keeps track of scores, flips and any other pertinent metrics for the game.</p>
            <p className='card-text fs-5'>My role:</p>
            <ul className='card-text' style={{listStyleType: 'none'}}>
              <li>Mainly building out the layouts for the game as well as making it responsive. I also was heavily invovled in switching the game over to a gloabally state managed engine from the original structure.</li>
            </ul>
            {/* <p className='card-text'>My role: on this collaborative project was mainly building out the layouts for the game as well as making it responsive. I also was heavily invovled in switching the game over to a gloabally state managed engine from the original structure.</p> */}
            <p className='card-text fs-5'>Tech used:</p>
            <ul className='card-text'>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React</li>
              <li>Node.js</li>
              <li>JSON Web Token</li>
              <li>Bootstrap</li>
              <li>Styled Components</li>
              <li>Heroku</li>
            </ul>
            <a target='_blank' rel='noopner noreferrer' href='https://github.com/BBelk/Memory-Game' className='btn btn-dark'>Github</a>
            <a target='_blank' rel='noopner noreferrer' href='https://dry-tundra-29489.herokuapp.com/' className='btn btn-dark mx-2' style={{backgroundColor: '#1b082b'}}>Live Site</a>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-4 mb-5' style={{width: "30rem", backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <img src={gitpub} className='card-img-top' alt='gitpub-screenshot'></img>
          <div className='card-body'>
            <h4 className='card-title'>GitPub</h4>
            <h6 className='card-subtitle mb-2'>Collaborative, Front-End</h6>
            <hr></hr>
            <p className='card-text'>A frontend web application that uses the OpenBreweryDB and SportsDB third-party APIs to find breweries in any city of your choosing as well as any major sporting events happening that day.</p>
            <p className='card-text fs-5'>My role:</p>
            <ul className='card-text' style={{listStyleType: 'none'}}>
              <li>Administrator, I led and assisted my colleagues with the work they needed to complete as well as working heavily on having our API calls work correctly. </li>
            </ul>
            {/* <p className='card-text'>My role: on this collaborative project was as the admin. I assisted all of my colleagues with the work they needed to complete, as well as doing a fair amount of it myself.</p> */}
            <p className='card-text fs-5'>Tech used:</p>
            <ul className='card-text'>
              <li>Bootstrap</li>
              <li>Open Brewery DB Third-Party API</li>
              <li>TheSportsDB Third-Party API</li>
            </ul>
            <a target='_blank' rel='noopner noreferrer' href='https://github.com/nsantander1095/gitpub' className='btn btn-dark'>Github</a>
            <a target='_blank' rel='noopner noreferrer' href='https://nsantander1095.github.io/gitpub/' className='btn btn-dark mx-2' style={{backgroundColor: '#1b082b'}}>Live Site</a>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-4 mb-5' style={{width: "30rem", backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <img src={emptrack} className='card-img-top' alt='employee-tracker-screenshot'></img>
          <div className='card-body'>
            <h4 className='card-title'>Employee Tracker</h4>
            <h6 className='card-subtitle mb-2'>Solo, Back-End</h6>
            <hr></hr>
            <p className='card-text'>Content Managememnt System for keeping track of employees, tracking items such as salary, role, manager, etc.</p>
            <p className='card-text fs-5'>Tech used:</p>
            <ul className='card-text'>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>Inquirer NPM</li>
            </ul>
            <a target='_blank' rel='noopner noreferrer' href='https://github.com/nsantander1095/employee-tracker-application' className='btn btn-dark'>Github</a>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-4 mb-5' style={{width: "30rem", backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <img src={socapi} className='card-img-top' alt='social-network-api-screenshot'></img>
          <div className='card-body'>
            <h4 className='card-title'>Social Network API</h4>
            <h6 className='card-subtitle mb-2'>Solo, Back-End</h6>
            <hr></hr>
            <p className='card-text'>Rest API for Social Network functionality using Express for routing, MongoDB and Mongoose for databse architecture, Node.js and Javascript.</p>
            <p className='card-text fs-5'>Tech used:</p>
            <ul className='card-text'>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose ODM</li>
            </ul>
            <a target='_blank' rel='noopner noreferrer' href='https://github.com/nsantander1095/social-network-api' className='btn btn-dark'>Github</a>
          </div>
        </div>
        <div className='card p-0 col-12 col-xxl-4 mb-5' style={{width: "30rem", backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <img src={portfolio} className='card-img-top' alt='portfolio-screenshot'></img>
          <div className='card-body'>
            <h4 className='card-title'>My Portfolio Website</h4>
            <h6 className='card-subtitle mb-2'>Solo, Front-End</h6>
            <hr></hr>
            <p className='card-text'>This portfolio was a solo endeavour to demonstrate my skills with building React applications, as well as handling the styling myself using Bootstrap.</p>
            <p className='card-text fs-5'>Tech used:</p>
            <ul className='card-text'>
              <li>Node.js</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
            <a target='_blank' rel='noopner noreferrer' href='https://github.com/nsantander1095/nsantander-portfolio' className='btn btn-dark'>Github</a>
          </div>
        </div>
      </div>
      {/* <ul>
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
      </ul> */}

    </div>
  )
}

export default Portfolio;