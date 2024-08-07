import React, { useRef } from 'react'
import Icon from '../ui/icon/Icon'
import emailjs from 'emailjs-com'
import data from '../../data'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_cw8fmmo', 'template_6z4zuuk', form.current, 'QjI65UGkSHIE7D01g')
            .then((result) => {
                form.current.reset()
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <section id='contact' className='contact-wrapper'>
            <div className='contact-left'>
                <form ref={form} className='contact-form' onSubmit={sendEmail}>
                    <h4 className='sub-title'><span>Let's work together</span></h4>
                    <p className='text'>
                        I'm always excited to connect with new people and
                        explore opportunities for collaboration.
                    </p>
                    <input type='text' name='first_name' placeholder='First name' required />
                    <input type='text' name='last_name' placeholder='Last name' required />
                    <input type='email' name='email_address' placeholder='Email address' required />
                    <input type='phone' name='phone_number' placeholder='Phone number' required />
                    <select name="select_service" required>
                        <option value=''>Select a service</option>
                        <option value='web_development'>Web Development</option>
                        <option value='ui_ux_design'>UI/UX Design</option>
                        <option value='logo_design'>Logo Design</option>
                    </select>
                    <textarea name='message' placeholder='Type your message here.' required></textarea>
                    <button type='submit'>Send message</button>
                </form>
            </div>
            <div className='contact-right'>
                <div className='info-wrapper'>
                    {data.contact.map(item => (
                        <div className='info-block'>
                            <div className='icon-block'>
                                <Icon id={item.icon} className='icon' />
                            </div>
                            <div className='text-block'>
                                <p className='text dark'>{item.id}</p>
                                <p className='text'>{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact