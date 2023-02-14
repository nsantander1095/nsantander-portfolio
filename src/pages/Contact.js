import React from 'react'

const Contact = () => {
  return (
    <div className="continaer-fluid p-3 mx-auto min-vh-100">
      <div className='row mt-2 justify-content-center'>
        <div className='card p-0 col-12 mt-5' style={{width: '30rem', backgroundColor: '#511981', boxShadow: '15px 10px 10px black'}}>
          <div className='card-body'>
            <h1 className='card-title text-center mb-2'>Contact Me</h1>
            <hr></hr>
            <p className='card-text text-center'>Email: <a href='mailto:nsantander1095@gmail.com' style={{color: '#ffff'}}>nsantander1095@gmail.com</a></p>
            <p className='card-text text-center'>Phone: <a href='tel:+7045027816' style={{color: '#ffff'}}>704-502-7816</a></p>
            <p className='card-text text-center'>Github: <a target='_blank' rel='noopner noreferrer' href='https://github.com/nsantander1095' style={{color: '#ffff'}}>github.com/nsantander1095</a></p>
            <p className='card-text text-center'>LinkedIn: <a target='_blank' rel='noopner noreferrer' href='https://www.linkedin.com/in/nicolas-santander/' style={{color: '#ffff'}}>www.linkedin.com/in/nicolas-santander/</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;