import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <img src="\logo.png" alt="Community Connect" height="40" />
          <span className="logo-text">Community Connect</span>
        </div>
        <div className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">Welcome to Community Connect</h1>
        <h2 className="hero-subtitle">Connecting Villages to Essential Services</h2>
        
        <div className="cta-container">
          <Link to="/services" className="cta-button">
            Explore Local Services →
          </Link>
          
          <div className="auth-links">
            <Link to="/login">Existing User? Sign In</Link>
            <Link to="/register">New User? Register Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;