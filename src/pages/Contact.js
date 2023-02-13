import React from 'react'

// TODO: Change to a card. Also add your linkedin and other relevant links. Potentially also style this card the most, lost of shadow

const Contact = () => {
  return (
    <div className="continaer-fluid m-2 p-2 mx-auto min-vh-100">
      <div className='row mt-2 justify-content-center'>
        <div className='card p-0 col-12 mt-5' style={{width: '30rem', backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <div className='card-body'>
            <h1 className='card-title text-center mb-2'>Contact Me</h1>
            <hr></hr>
            <p className='card-text text-center'>Email: nsantander1095@gmail.com</p>
            <p className='card-text text-center'>Phone: 704-555-5555</p>
            <p className='card-text text-center'>Github: github.com/nsantander1095</p>
            <p className='card-text text-center'>LinkedIn: www.linkedin.com/in/nicolas-santander/</p>
          </div>
        </div>
      </div>
      {/* <div className='row justify-content-center'>
        <h2 className="mb-3 text-center">Contact Me</h2>
        <p className='text-center'>
          My contact information is as follows:
          <ul className='list-group list-group-flush'>
            <li className='list-group-item border-0'>
              Email: nick@me.com
            </li>
            <li className='list-group-item border-0'>
              Phone: 704-555-5555
            </li>
            <li className='list-group-item border-0'>
              GitHub: https://github.com/nsantander1095
            </li>
          </ul>
        </p>

      </div> */}
    </div>
  )
}

export default Contact;