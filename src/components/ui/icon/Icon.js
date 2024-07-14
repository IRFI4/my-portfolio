import React from 'react'
import Icons from '../../../assets/sprite/sprite.svg'

const Icon = ({ id, className, onClick }) => {
    return (
        <svg className={className} onClick={onClick}>
            <use href={Icons + "#icon-" + id}></use>
        </svg>
    )
}

export default Icon
