import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom';
import './App.css';
// import { useNavigate } from 'react-router-dom'
import { Container, Row } from 'reactstrap';

import Logo from "./images/Logo.jpg"
import userIcon from './images/userIcon.jpg'

const Header = () => {

  const menuRef = useRef(null);

  const nav_links = [
    {
      path: 'home',
      display: 'Home'
    },
    {
      path: 'about',
      display: 'About'
    },
    {
      path: 'doctors',
      display: 'Doctors'
    },
    {
      path: 'contact',
      display: 'Contact'
    }
  ]

  // const logout = () => {

  // }
  // const myprofile = () => {
  //   navigate('/myprofile'); // Navigate to my profile page
  // };
  // const navigate = useNavigate();


  const profileActionRef = useRef(null)
  const [profileActionsVisible, setProfileActionsVisible] = useState(false);
  const menuToggle = () => menuRef.current.classList.toggle('active-menu');
  // const toggleProfileActions = ()=> profileActionRef.current.classList.toggle('show_profileActions')
  const toggleProfileActions = () => {
    setProfileActionsVisible(!profileActionsVisible);
  };

  const closeProfileActions = () => {
    setProfileActionsVisible(false);
  };

  return <header className='header sticky-header'>
  <Container>
    <Row>
      <div className="nav__wrapper">
        <div className="logo">
          <img src={Logo} alt="" width={230} />
        </div>
        <div className="navigation" ref={menuRef} onClick={menuToggle}>
          <ul className="menu">
            {
              nav_links.map((item, index) => (<li className="nav_item nav_link" key={index}>
                <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ""} style={{ textDecoration: 'none', color: 'var(--primary-color)' }} >{item.display}</NavLink>
              </li>))
            }
          </ul>
        </div>

        <div className="nav_icons">
          <div className="user_icon" onBlur={closeProfileActions}>
            <img src={userIcon} alt="" onClick={toggleProfileActions} />
            {/* <span>{currentUser.displayName}</span> */}
            <div className={`profile-actions ${profileActionsVisible ? 'show_profileActions' : ''}`} ref={profileActionRef}>
                {/* <div className='d-flex align-items-center justify-content-center flex-column'> */}
                <div className="profile_link">
                  <Link to='/myprofile' style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>My Profile</Link>
                  <Link to='/signup' style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>SignUp</Link>
                  <Link to='/Login' style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Login</Link>
                  <Link to='/dashboard' style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Dashboard</Link>
                </div>
            </div>
          </div>
          <div className="mobile_menu">
            <span className="menu_icon" onClick={menuToggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 7.375H20.25" stroke="#515151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75 13H15.75" stroke="#515151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75061 18H20.25" stroke="#515151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
          </div>
        </div>
      </div>
    </Row>
  </Container>
</header>
}

export default Header