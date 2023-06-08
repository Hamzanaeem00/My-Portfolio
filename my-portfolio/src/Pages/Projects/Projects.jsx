import React from 'react'
import MyProjects from '../../components/MyProjects/MyProjects'

const Projects = ({theme}) => {
  return (
    <div>
      <div>
        <span className="experiences w-100 mb-0">PROJECTS</span>
      </div>
      <div>
        <MyProjects theme={theme} />
      </div>
    </div>
  )
}

export default Projects
