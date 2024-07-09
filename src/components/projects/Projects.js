import React from 'react'
import ProjectItem from './ProjectItem'
import data from '../../data'

const Projects = () => {
    return (
        <div className='projects-wrapper'>
            <h1 className='title'>My latest projects</h1>
            <div className='projects-container'>
                {data.projects.map(item =>
                    <ProjectItem key={item.source} data={item} />
                )}
            </div>
        </div>
    )
}

export default Projects