import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import lexmeetlogo from '../assets/lexmeetlogo.png'; // Import the logo
import facebook_icon from '../assets/facebook_icon.png';
import ig_icon from '../assets/ig_icon.png';
import x_icon from '../assets/x_icon.png';
import reddit_icon from '../assets/reddit_icon.png';
import linkedin_icon from '../assets/linkedin_icon.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <a href="https://lexmeet.com/" target="_blank" rel="noopener noreferrer">
          <img src={lexmeetlogo} alt="LexMeet Logo" className="navbar-logo" />
        </a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="https://www.facebook.com/LexMeet" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <img src={facebook_icon} alt="Facebook" className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="https://www.instagram.com/lexmeet.legal.help/" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <img src={ig_icon} alt="Instagram" className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="https://x.com/LexMeet" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <img src={x_icon} alt="X" className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="https://www.reddit.com/user/lexmeet-legal-help/" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <img src={reddit_icon} alt="Reddit" className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="https://www.linkedin.com/company/lexmeet-inc/" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} alt="LinkedIn" className="navbar-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
