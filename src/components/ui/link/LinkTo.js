import React from 'react'

const Link = ({ url, text }) => {
    return (
        <a href={url} className='nav-item'>{text}</a>
    )
}

export default Link