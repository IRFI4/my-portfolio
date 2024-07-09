import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
    return (
        <>
            <h5 className='sub-title'>My experience</h5>
            <p className='text'>
                In terms of experience, I have completed ... course for frontend developers,
                having produced 3 major works for my portfolio.
            </p>
            <div className='box-wrapper'>
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </>
    )
}

export default Experience