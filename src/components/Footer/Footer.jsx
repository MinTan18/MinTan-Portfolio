import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>
        MinTan
      </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testinomials">Testinomials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#services">Services</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><FaTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MinTan From DT7</small>
      </div>
    </footer>
  )
}

export default Footer