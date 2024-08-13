import React from 'react'
import Icon from '../ui/icon/Icon'
import profile from '../../assets/images/photo.jpg'
import resume from '../../assets/resume/hliadielkin-vlad-eng.pdf'
import data from '../../data'
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
                        <a href={resume} download>
                            <button className='cv-download'>Download CV <Icon id='download' className='icon' /></button>
                        </a>
                        {data.social.map(item => (
                            <a target='_blank' rel='noreferrer' href={item.href} key={item.icon} className='icon-wrapper'><Icon id={item.icon} className='icon' /></a>
                        ))}
                    </div>
                </div>

                <div className='profile-right'>
                    <div className='image-wrapper'>
                        <img className='profile-image' src={profile} alt='profile-image' />
                    </div>
                </div>
            </div>
            <div className='profile-bottom'>
                {data.stats.map(item => (
                    <div key={item.achievement} className='profile-bottom-wrapper'>
                        <b>{item.count}</b>
                        <p>{item.achievement}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Profile