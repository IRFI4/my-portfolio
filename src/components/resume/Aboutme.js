import React from 'react'
import AboutmeItem from './AboutmeItem'
const Aboutme = () => {
    return (
        <>
            <h5 className='sub-title'>About me</h5>
            <p className='text'>
                About me, I have completed ... course for frontend developers,
                having produced 3 major works for my portfolio.
            </p>
            <div className='box-wrapper'>
                <AboutmeItem />
                <AboutmeItem />
            </div>
        </>
    )
}

export default Aboutme