import React from 'react'
import data from '../../data'
import Icon from '../ui/icon/Icon'

const Skills = () => {
    return (
        <>
            <h5 className='sub-title'>My skills</h5>
            <p className='text'>
                In terms of my skills, I have completed ... course for frontend developers,
                having produced 3 major works for my portfolio.
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