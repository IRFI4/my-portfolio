import React from 'react'
import Placeholder from '../ui/placeholder/Placeholder'

const ProjectItem = ({ data }) => {
    return (
        <div className='project-item'>
            <div className='project-image'>
                <img src={data.imageUrl} alt={data.title} />
            </div>
            <div className='project-info'>
                <h3 className='sub-title'><span>{data.title}</span></h3>
                <p className='text'>{data.description}</p>
                <div className='technologies'>
                    {data.technologies.map(item =>
                        <Placeholder text={item} />
                    )}
                </div>
                <button className='project-btn'>Move to the project</button>
            </div>
        </div>
    )
}

export default ProjectItem