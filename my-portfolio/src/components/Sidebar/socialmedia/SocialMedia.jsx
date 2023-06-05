import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import '../../../App.css'

const SocialMedia = () => {
  return (
    <div className='d-flex justify-content-between'>

    <div className='mx-2' >
        <a className='mx-2' style={{color:"#3b5998"}} href="https://www.facebook.com/hamzanaeem.khan.184/" target="_blank" rel="noreferrer">
            <FacebookIcon />
        </a>
        <a className='mx-2 socail-icon ' href="https://github.com/Hamzanaeem00 " target="_blank" rel="noreferrer">
            <GitHubIcon />
        </a>
        <a className='mx-2' style={{color:"#0072b1"}}  href="https://www.linkedin.com/in/hamza-naeem-khan-840683220/" target="_blank" rel="noreferrer">
            < LinkedInIcon/>
        </a>
    </div>
      
      <div className='mx-2 socail-icon'>
        <Link to = '/contact'>
        <EmailIcon className='.socail-icon'
          />
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia
