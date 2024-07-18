import React from 'react'
import data from '../../data'

const Experience = () => {
    return (
        <>
            <h5 className='sub-title'>My experience</h5>
            <p className='text'>
                In terms of experience, I have completed ... course for frontend developers,
                having produced 3 major works for my portfolio.
            </p>
            <div className='box-wrapper'>
                {data.experience.map(item => (
                    <div className='rectangle-box'>
                        <p className='box-date'><span>{item.date}</span></p>
                        <p className='box-title'>{item.positon}</p>
                        <p className='box-company'><span></span>{item.company}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experience