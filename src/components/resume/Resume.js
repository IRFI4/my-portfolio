import React, { useState } from 'react'
import ExperienceItem from './ExperienceItem'

const Resume = () => {
    const [content, setContent] = useState('education')

    return (
        <div className='resume'>
            <div className='resume-left'>
                <h2 className='sub-title'>Why hire me?</h2>
                <p className='text'>Lorem ipsum some text which no one gonna read bla bla bla</p>
                <div className='input-switcher'>

                    <input
                        onChange={() => setContent('experience')}
                        checked={content === 'experience'}
                        value='experience'
                        type='radio'
                        id='experience'
                        name='content' />
                    <label htmlFor='experience'>Experience</label>

                    <input
                        onChange={() => setContent('education')}
                        checked={content === 'education'}
                        value='education'
                        type='radio'
                        id='education'
                        name='content' />
                    <label htmlFor='education'>Education</label>

                    <input
                        onChange={() => setContent('skills')}
                        checked={content === 'skills'}
                        value='skills'
                        type='radio'
                        id='skills'
                        name='content' />
                    <label htmlFor='skills'>Skills</label>

                    <input
                        onChange={() => setContent('aboutme')}
                        checked={content === 'aboutme'}
                        value='aboutme'
                        type='radio'
                        id='aboutme'
                        name='content' />
                    <label htmlFor='aboutme'>Aboutme</label>

                </div>
            </div>
            <div className='resume-right'>
                <h5 className='sub-title'>My experience</h5>
                <p className='text'>
                    In terms of education, I have completed ... course for frontend developers,
                    having produced 3 major works for my portfolio.
                </p>
                <div className='box-wrapper'>
                    <ExperienceItem />
                    <ExperienceItem />
                    <ExperienceItem />
                    <ExperienceItem />
                </div>
            </div>
        </div>
    )
}

export default Resume