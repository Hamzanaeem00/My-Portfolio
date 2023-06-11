import React from 'react'
import MyProjects from '../../components/MyProjects/MyProjects'

const Projects = ({theme}) => {
  return (
    <div>
      <div className=",mt-4">
        <span className="experiences  w-100 mb-0">PROJECTS</span>
        <p
          className=" know-me w-100 text-center mb-0 mt-3 position-sticky bottom-100"
        >
          My Work
          <p
            className="  border-bottom border-3 border-success mx-auto"
            style={{ width: "80px" }}
          ></p>
        </p>
      </div>
      <div>
        <MyProjects theme={theme} />
      </div>
    </div>
  )
}

export default Projects
