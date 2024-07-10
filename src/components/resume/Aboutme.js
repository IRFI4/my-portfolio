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
                <AboutmeItem id='Name' value='Vlad Hliadelkin' />
                <AboutmeItem id='Phone' value='(+380)95 104 9688' />
                <AboutmeItem id='Experience' value='22+ Years' />
                <AboutmeItem id='Discord' value='vlad#2816' />
                <AboutmeItem id='Nationality' value='Ukrainian' />
                <AboutmeItem id='Email' value='vladisglyadelkin@gmail.com' />
                <AboutmeItem id='Freelance' value='Available' />
                <AboutmeItem id='Languages' value='English, Ukrainian' />
            </div>
        </>
    )
}

export default Aboutme