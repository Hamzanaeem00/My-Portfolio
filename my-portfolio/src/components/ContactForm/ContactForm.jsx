import React from 'react'
import './ContactForm.css'
import ContactInfo from '../ContactInfo/ContactInfo'

const ContactForm = () => {

    const handleSubmit = ()=>{

    }
  return (
    <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <ContactInfo />
        </div>
        <div className='col-lg-8 col-md-6 col-sm-12'>
      <h3>
        LETS CONNECT
      </h3>
      <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 '>
        <input className='col-lg-12 col-sm-12 col-md-12 con-input form-control mt-3' type="text" placeholder='Name' />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12  '>
        <input className='col-lg-12 col-sm-12 col-md-12 con-input form-control mt-3' type="text" placeholder='Email' />
            </div>
        </div>
        <div className='mt-3'>
            <textarea name="" id=""  className='w-100 form-control con-text'   placeholder='Enter Your Message...'></textarea>
        </div>
      </form> 
        </div>

    </div>
  )
}

export default ContactForm
