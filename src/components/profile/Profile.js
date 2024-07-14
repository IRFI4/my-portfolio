import React from 'react'
import Icon from '../ui/icon/Icon'
import profile from '../../assets/images/photo.jpg'

const Profile = () => {
    return (
        <section>
            <div className='profile'>
                <div className='profile-left'>
                    <h5 className='sub-title'>Frontend Developer</h5>
                    <h1 className='title'>Hello, I'm</h1>
                    <h1 className='title'><span>Vlad Hliadelkin</span></h1>
                    <p className='text'>
                        I specialize in building and enhancing responsive web applications.
                        I excel in collaborating with team members and adapting to new challenges.
                        My strengths include a passion for coding, quick learning abilities,
                        and a strong willingness to embrace new technologies.
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
                        <img className='profile-image' src={profile} alt='profile-image' />
                    </div>
                </div>
            </div>
            <div className='profile-bottom'>
                <div className='profile-bottom-wrapper'>
                    <b>3</b>
                    <p>Personal projects</p>
                </div>

                <div className='profile-bottom-wrapper'>
                    <b>8</b>
                    <p>Technologies learned</p>
                </div>

                <div className='profile-bottom-wrapper'>
                    <b>3</b>
                    <p>Open source contributions</p>
                </div>

                <div className='profile-bottom-wrapper'>
                    <b>100</b>
                    <p>Code commits</p>
                </div>
            </div>
        </section>
    )
}

export default Profile