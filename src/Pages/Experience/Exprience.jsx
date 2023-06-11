import React from 'react'
import WorkExperience from '../../components/WorkExperience/WorkExperience'
import './Experience.css'

const Exprience = () => {
  return (
    <div>
       <div className='mt-4'>
        <span className="experiences w-100 mb-0">EXPERIENCE</span>
      </div>
      <div>
      <WorkExperience />
      </div>
    </div>
  )
}

export default Exprience
