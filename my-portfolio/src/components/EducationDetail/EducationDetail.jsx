import React from 'react'
import './EducationDetail.css'

const EducationDetail = () => {

  const educationList = [
    {
      id: 1,
       year: "2018-2022",
       field: "Bachelor Degree",
       uni: "University OF Karachi",
       details: "I have Completed My Graduation in Software Engineering from University of Karachi (UBIT).",
       
    },
    {
      id: 2,
       year: "2016-2018",
       field: "Intermediate",
       uni: "SRE-Majeed",
       details: "I have Completed my Intermediate in Pre-Engineering from Govt.Degree SRE Majeed.",
    },
    {
      id: 3,
       year: "2003-2016",
       field: "Science",
       uni: "Zahid Kids School",
       details: "I have Completed My Matriculation in Science from Zahid Kids School.",
    },
  ]

  return (
    <div className='row'>
      {
        educationList?.map((edu)=>{
          return(
            <div className='col-lg-6 col-md-12 col-sm-12'>
            <div key={edu.id} className='education p-3 rounded  mt-3'>
            <p className='year'>{edu.year}</p>
            <h5 className='field'>{edu.field}</h5>
            <p className='uni'>{edu.uni}</p>
            <p className='details'>{edu.details}</p>
          </div>
          </div>

          )

        })
      }

       
    </div>
  )
}

export default EducationDetail
