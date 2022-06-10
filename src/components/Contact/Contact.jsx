import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gfca393', 'template_ql20ndm', form.current, 'MhDblquVexsiMIdEb')};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>  
            <h4>Email</h4>
            <h5>lmtan.work@gmail.com</h5>
            <a href="mailto:lmtan.work@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>  
            <h4>Messenger</h4>
            <h5>Min Tan</h5>
            <a href="https://facebook.com" target='_blank'>Send messages</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>  
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=0903134404" target='_blank'>Call me</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit= {sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required id="" />
          <input type="email" name="email" placeholder='Your Email' id="" required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact