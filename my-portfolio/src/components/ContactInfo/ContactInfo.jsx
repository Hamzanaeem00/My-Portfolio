import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import './ContactInfo.css'

const ContactInfo = () => {
  return (
    <div>
      <div className='mt-2'>
        <h3>CATCH ME HERE</h3>
      </div>
      <div className='mt-4'>
        <PhoneIcon className='con-icons' />
         <span className=''>
          0334-3177400
         </span>
      </div>
      <div className='mt-1'>
        <MailIcon className='con-icons'/>
        <span className='mx-1 text-center'>hamzanaeemkhan977</span>
        <p className='mx-3'>@gmail.com</p>
      </div>

      <div className='mt-4 '>
        <h3>
            FOLLOW ME
        </h3>
      </div>
      <div className='d-flex '>
      <div className='mx-2'>
        <FacebookRoundedIcon />
      </div>
      <div className='mx-2'>
        <TwitterIcon />
      </div>
      <div className='mx-2'>  
        <GitHubIcon />
      </div>
      </div>
    </div>
  )
}

export default ContactInfo
