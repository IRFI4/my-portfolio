import React from 'react'
import data from '../../data'

const Aboutme = () => {

    return (
        <>
            <h5 className='sub-title'>About me</h5>
            <p className='text'>
                My goal is to create beautiful and functional web applications that enhance user experiences.
                I am constantly working to improve my skills in frontend development and stay updated with
                the latest trends in the field.
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