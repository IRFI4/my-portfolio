import React from 'react'
import Icon from '../ui/icon/Icon'
const Contact = () => {
    return (
        <section id='contact' className='contact-wrapper'>
            <div className='contact-left'>
                <form className='contact-form' action="mailto:vladisglyadelkin@gmail.com" method="post" enctype="text/plain">
                    <h4 className='sub-title'><span>Let's work together</span></h4>
                    <p className='text'>
                        I'm always excited to connect with new people and
                        explore opportunities for collaboration.
                    </p>
                    <input type='text' placeholder='First name' />
                    <input type='text' placeholder='Last name ' />
                    <input type='email' placeholder='Email address' />
                    <input type='phone' placeholder='Phone number' />
                    <select>
                        <option>Select a service</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>Logo Design</option>
                    </select>
                    <textarea placeholder='Type your message here.'></textarea>
                    <button type='submit'>Send message</button>
                </form>
            </div>
            <div className='contact-right'>
                <div className='info-wrapper'>
                    <div className='info-block'>
                        <div className='icon-block'>
                            <Icon id='phone' className='icon' />
                        </div>
                        <div className='text-block'>
                            <p className='text dark'>Phone</p>
                            <p className='text'>(+380)95 104 96 88</p>
                        </div>
                    </div>
                    <div className='info-block'>
                        <div className='icon-block'>
                            <Icon id='mail' className='icon' />
                        </div>
                        <div className='text-block'>
                            <p className='text dark'>Email</p>
                            <p className='text'>vladisglyadelkin@gmail.com</p>
                        </div>
                    </div>
                    <div className='info-block'>
                        <div className='icon-block'>
                            <Icon id='location' className='icon' />
                        </div>
                        <div className='text-block'>
                            <p className='text dark'>Address</p>
                            <p className='text'>Ukraine, Marhanets 53400</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact