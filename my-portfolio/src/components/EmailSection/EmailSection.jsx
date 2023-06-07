import React from 'react'
import './EmailSection.css'
const EmailSection = () => {
  return (
    <div>
      <ul className='list-style'>
        <li> <span className='fs-5 fw-bold'>
            Name:  </span> Hamza Naeem Khan </li>
        <li className=''><span className='fs-5 fw-bold'>Email: </span> <a className='email' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/hamzanaeem977%40gmail.com?compose=new" target="_blank" rel="noreferrer">hamzanaeemkhan977@ <br/> gmail.com</a></li>
        <li><span className='fs-5 fw-bold'>Age: </span>24</li>
        <li><span className='fs-5 fw-bold'>From: </span>Karachi, Pakistan</li>
      </ul>
    </div>
  )
}

export default EmailSection
