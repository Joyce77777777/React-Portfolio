import React from 'react';

const Header = ({ setActiveSection }) => (
  <header>
    <h1>Jianing</h1>
    <nav>
      <button onClick={() => setActiveSection('AboutMe')}>About Me</button>
      <button onClick={() => setActiveSection('Portfolio')}>Portfolio</button>
      <button onClick={() => setActiveSection('Contact')}>Contact</button>
      <button onClick={() => setActiveSection('Resume')}>Resume</button>
    </nav>
  </header>
);

export default Header;