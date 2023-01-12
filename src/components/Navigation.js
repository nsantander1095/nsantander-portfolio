import React from 'react'

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-info'>
        <div className='container-fluid'>
          <a className='navbar-brand fs-1' onClick={() => setCurrentPage('About')} href='#about'>Nicolas Santander's Portfolio</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse flex-grow-0' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
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