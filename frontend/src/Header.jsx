import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(1, 14, 22, 0.7)',
        padding: '10px 30px',
        position: 'fixed',
        width: '100%',
        height: '80px',
        top: 0,
        left: 0,
        zIndex: 500,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
      className="navbar"
    >
      <Link
        to="/contactus"
        style={{
          textDecoration: 'none',
          color: 'white',
          padding: '30px 50px',
          fontSize: '25px',
          transition: 'background-color 0.3s, color 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'yellow';
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        Contact Us
      </Link>
      <Link
        to="/aboutus"
        style={{
          textDecoration: 'none',
          color: 'white',
          padding: '30px 50px',
          fontSize: '25px',
          transition: 'background-color 0.3s, color 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'yellow';
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        About Us
      </Link>
      <Link
        to="/logout"
        style={{
          textDecoration: 'none',
          color: 'white',
          padding: '30px 50px',
          fontSize: '25px',
          transition: 'background-color 0.3s, color 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'yellow';
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        Logout
      </Link>
    </div>
  );
};

export default Header;
