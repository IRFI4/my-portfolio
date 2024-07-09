import React from 'react'
import Icon from '../ui/icon/Icon'

const SkillsItem = ({ id }) => {
    return (
        <div className='square-box'>
            <Icon id={id} className='icon' />
        </div>
    )
}

export default SkillsItem