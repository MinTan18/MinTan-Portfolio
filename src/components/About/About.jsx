import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import {BsAward} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineUser className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>1+ Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, unde. Repellendus est consequatur corrupti, nesciunt nobis expedita amet, laborum voluptatum qui cupiditate animi unde iste mollitia saepe! Odio, hic beatae?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About