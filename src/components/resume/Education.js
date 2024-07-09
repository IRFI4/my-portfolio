import React from 'react'
import EducationItem from './EducationItem'
const Education = () => {
    return (
        <>
            <h5 className='sub-title'>My eductaion</h5>
            <p className='text'>
                In terms of education, I have completed ... course for frontend developers,
                having produced 3 major works for my portfolio.
            </p>
            <div className='box-wrapper'>
                <EducationItem />
                <EducationItem />
                <EducationItem />
                <EducationItem />
            </div>
        </>
    )
}

export default Education