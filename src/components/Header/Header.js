import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <header className="header-section d-flex">
        <Container>
            <div className="header-content d-flex justify-content-between">
            <div className="logo">
              <h1><Link exact to="/">KidsGenesis</Link></h1>
            </div>
            <div className="d-flex nav-bar">
              <NavLink exact to="/" activeStyle={{fontWeight: "bold"}}>Home</NavLink>
              <NavLink to="/about" activeStyle={{fontWeight: "bold",}}>About</NavLink>
              <NavLink to="/services" activeStyle={{fontWeight: "bold"}}>Services</NavLink>
              <NavLink to="/teacher" activeStyle={{fontWeight: "bold"}}>Teachers</NavLink>
              <NavLink to="/contact" activeStyle={{fontWeight: "bold"}}>Contact</NavLink>
            </div>
            </div>
        </Container>
      </header>
    );
};

export default Header;