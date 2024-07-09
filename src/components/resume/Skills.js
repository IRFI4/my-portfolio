import React from 'react'
import SkillsItem from './SkillsItem'



const Skills = () => {
    return (
        <>
            <h5 className='sub-title'>My skills</h5>
            <p className='text'>
                In terms of my skills, I have completed ... course for frontend developers,
                having produced 3 major works for my portfolio.
            </p>
            <div className='box-wrapper'>
                <SkillsItem id='html' />
                <SkillsItem id='css' />
                <SkillsItem id='js' />
                <SkillsItem id='react' />
                <SkillsItem id='redux' />
                <SkillsItem id='node' />
                <SkillsItem id='next' />
                <SkillsItem id='figma' />
            </div>
        </>
    )
}

export default Skills