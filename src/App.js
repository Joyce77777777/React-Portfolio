import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';  // Assuming this includes your navigation
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('AboutMe');
  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      {activeSection === 'AboutMe' && <AboutMe />}
      {activeSection === 'Portfolio' && <Portfolio />}
      {activeSection === 'Contact' && <Contact />}
      {activeSection === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
