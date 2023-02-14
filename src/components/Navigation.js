import React from 'react'
import logo from '../assets/images/logo-color.png'

// TODO: Continue to make sure this looks good on mobile. It was kind of annoying to see the navbar grow so large and for the links to not flex row at breakpoint. Maybe try to fix toggler?

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <div>
      <nav className='navbar navbar-dark navbar-expand-lg' style={{ backgroundColor: '#7a26c1'}}>
        <div className='container-fluid'>
          <a className='navbar-brand fs-1' onClick={() => setCurrentPage('About')} href='#about'>
            {/* <p className='text-wrap'>Nicolas Santander</p> */}
            <img src={logo} alt='logo' style={{width: '20rem'}}></img>
          </a>
          {/* <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button> */}
          <div className='' id='navbarNavDropdown'>
            <ul className='navbar-nav d-flex'>
              <li className='nav-item'>
                <a href='#about' onClick={() => setCurrentPage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href='#contact' onClick={() => setCurrentPage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                  Contact
                </a>
              </li>
              <li className='nav-item'>
                <a href='#portfolio' onClick={() => setCurrentPage('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a href='#resume' onClick={() => setCurrentPage('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;