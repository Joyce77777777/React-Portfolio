import React from 'react';
import './Header.css'; // Make sure to import the CSS file

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <div className="header-container">
      <h1 className="site-title">Jianing</h1>
      <nav className="navigation">
        <button className={activeSection === 'AboutMe' ? 'active' : ''} onClick={() => setActiveSection('AboutMe')}>About me</button>
        <button className={activeSection === 'Portfolio' ? 'active' : ''} onClick={() => setActiveSection('Portfolio')}>Portfolio</button>
        <button className={activeSection === 'Contact' ? 'active' : ''} onClick={() => setActiveSection('Contact')}>Contact</button>
        <button className={activeSection === 'Resume' ? 'active' : ''} onClick={() => setActiveSection('Resume')}>Resume</button>
      </nav>
    </div>
  );
};

export default Header;
