import React from 'react'
import data from '../../data'
import Icon from '../ui/icon/Icon'

const Skills = () => {
    return (
        <>
            <h5 className='sub-title'>My skills</h5>
            <p className='text'>
                I possess a strong skill set in modern web development technologies,
                including HTML, CSS, JavaScript, and React. My proficiency extends to
                TypeScript, Node.js, and Next.js, allowing me to build robust and scalable web applications.
            </p>
            <div className='box-wrapper'>
                {data.skills.map(item => (
                    <div className='square-box' key={item}>
                        <Icon id={item} className='icon' />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Skills