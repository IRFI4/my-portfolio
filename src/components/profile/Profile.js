import React from 'react'
import Icon from '../ui/icon/Icon'

const Profile = () => {
    return (
        <>
            <div className='profile'>
                <div className='profile-left'>
                    <p className='sub-title'>Frontend Developer</p>
                    <h1 className='title'>Hello, I'm</h1>
                    <h1 className='title'><span>Vlad Hliadelkin</span></h1>
                    <p className='text'>
                        I specialize in building and enhancing responsive web applications.
                        I’m good at collaborating with team members and adapting to new challenges.
                        My advantages are my enthusiasm for coding, quick learning ability, and my willingness to learn new technologies.
                    </p>
                    <div className='social'>
                        <button className='cv-download'>Download CV <Icon id='download' className='icon' /></button>
                        <div className='icon-wrapper'><Icon id='github' className='icon' /></div>
                        <div className='icon-wrapper'><Icon id='linkedin' className='icon' /></div>
                        <div className='icon-wrapper'><Icon id='instagram' className='icon' /></div>
                        <div className='icon-wrapper'><Icon id='twitter' className='icon' /></div>
                    </div>
                </div>

                <div className='profile-right'>
                    <div className='image-wrapper'>
                        <img className='profile-image' src='#' alt='profile-image' />
                    </div>
                </div>
            </div>
            <div className='profile-bottom'>
                <div className='profile-bottom-wrapper'>
                    <b>12</b>
                    <p>Years of experience</p>
                </div>

                <div className='profile-bottom-wrapper'>
                    <b>25</b>
                    <p>Projects completed</p>
                </div>

                <div className='profile-bottom-wrapper'>
                    <b>8</b>
                    <p>Technologies mastered</p>
                </div>

                <div className='profile-bottom-wrapper'>
                    <b>486</b>
                    <p>Code commits</p>
                </div>
            </div>
        </>
    )
}

export default Profile