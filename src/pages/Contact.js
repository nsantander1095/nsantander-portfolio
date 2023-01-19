import React from 'react'

const Contact = () => {
  return (
    <div className="m-2 p-2 vh-100">
      <div className='row justify-content-center'>
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

      </div>
    </div>
  )
}

export default Contact;