import React, { useState } from 'react';
import './style.css';
import InfoCard from './info_card/info-card-componant';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function ContactUs() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <div>
        <section className="contact-section" id='contactus'>
            <div className="contact-wrapper">
            <div className="contact-title">
                <h3 className="title">Contact Us</h3>
            </div>
            <div className="contact-form-wrapper">
            <div className="contact-container">
                <div className="info">
                    <InfoCard icon={faPhone}text="01000000000"/>
                    <InfoCard icon={faEnvelope} text="squadrastandupteam@gmail.com"/>
                    </div>
                </div>
            <div className="form-container">
            <form action="">

                <div className="form-group">
                    <label htmlFor="name">
                        Your Name 
                        <input type="text" 
                        id='name'
                        name='name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}

                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Your Email 
                        <input type="text" 
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}

                        />
                    </label>
                </div>
                


                <div className="form-group">
                    <label htmlFor="message">
                        Your Message 
                        <textarea
                        id='message'
                        name='message'
                        value={message}
                        onChange={(e)=> setMessage(e.target.value)}

                        />
                    </label>
                    <button type='submit'>Send</button>
                </div>

            </form>
            </div>
            </div>

            
            </div>
        </section>
    </div>
  )
}
