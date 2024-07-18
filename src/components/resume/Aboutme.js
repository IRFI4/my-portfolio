import React from 'react'
import data from '../../data'

const Aboutme = () => {

    return (
        <>
            <h5 className='sub-title'>About me</h5>
            <p className='text'>
                About me, I have completed ... course for frontend developers,
                having produced 3 major works for my portfolio.
            </p>
            <div className='box-wrapper'>
                {data.aboutMe.map(item => (
                    <div className='text-wrapper' key={item.id}>
                        <p className='text dark'>{item.id}</p>
                        <p className='text'>{item.value}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Aboutme