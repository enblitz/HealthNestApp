import React from 'react';
import './App.css';

import Logo from './images/Logo.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return <section className='footer'>
    <div className="container-footer">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <img src={Logo} alt="" width={230} className='footer-image' />
          <div className='footer-o-text d-block mt-3 mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, vero fuga quis odit laboriosam soluta deserunt vel vitae?</div>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <p className="footer-title">For Patient</p>
          <ul className='footer-ul'>
            <li>Search for Doctors</li>
            <li>Login</li>
            <li>Register</li>
            <li>Booking</li>
            <li>Patient Dashboard</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <p className="footer-title">For Doctor</p>
          <ul className="footer-ul">
            <li>Appointments</li>
            <li>Login</li>
            <li>Register</li>
            <li>Doctor Dashboard</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <p className="footer-title">Contact Us</p>
          <ul className="footer-ul">
            <li className='d-flex'>
              <div className="footer-info-i">
                <FaMapMarkerAlt />
              </div>
              <span> 121, Mirzapure Union office,<br /> Sylhet, Bangladesh 03214 </span>
            </li>
            <li className='d-flex'>
              <div className="footer-info-i">
                <FaPhoneAlt />
              </div>
              <span>+88 017 51 040425</span>
            </li>
            <li className='d-flex'>
              <div className="footer-info-i">
                <FaEnvelope />
              </div>
              <span>info@woodencraft.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
}

export default Footer