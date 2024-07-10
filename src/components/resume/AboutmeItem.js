import React from 'react'

const AboutmeItem = ({ id, value }) => {
    return (
        <div className='text-wrapper'>
            <p className='text dark'>{id}</p>
            <p className='text'>{value}</p>
        </div>
    )
}

export default AboutmeItem