import React from 'react'
import EducationDetail from '../../components/EducationDetail/EducationDetail'

const Education = () => {
  return (
    <div>
    <div>
        <span className="experiences  w-100 mb-0">SUMMARY</span>
        <p
          className=" know-me w-100 text-center mb-0 mt-3 position-sticky bottom-100"
        >
          Education
          <p
            className="  border-bottom border-3 border-success mx-auto"
            style={{ width: "80px" }}
          ></p>
        </p>
      </div>
      <div>
        <EducationDetail />
      </div>
    </div>
  )
}

export default Education
