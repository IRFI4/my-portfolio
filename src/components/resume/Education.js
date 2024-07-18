import React from 'react'
import data from '../../data'

const Education = () => {
    return (
        <>
            <h5 className='sub-title'>My eductaion</h5>
            <p className='text'>
                In terms of education, I have completed ... course for frontend developers,
                having produced 3 major works for my portfolio.
            </p>
            <div className='box-wrapper'>
                {data.education.map(item => (
                    <div className='rectangle-box' key={item.company}>
                        <p className='box-date'><span>{item.date}</span></p>
                        <p className='box-title'>{item.positon}</p>
                        <p className='box-company'><span></span>{item.company}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Education