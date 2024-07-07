import React from 'react'

const Button = ({ text, style, callback }) => {
    return (
        <button onClick={callback} className={style}>{text}</button>
    )
}

export default Button