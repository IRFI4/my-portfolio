import React, { useState } from 'react'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Aboutme from './Aboutme'

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
                {content === 'experience' && <Experience />}
                {content === 'education' && <Education />}
                {content === 'skills' && <Skills />}
                {content === 'aboutme' && <Aboutme />}
            </div>
        </div>
    )
}

export default Resume