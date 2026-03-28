import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/portfolio.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Wrapper component to handle routing logic
const AppContent = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  // Get current path without the leading slash
  const getCurrentSection = useCallback(() => {
    const path = location.pathname.substring(1);
    return path || 'home';
  }, [location.pathname]);

  // Show only the active section based on route
  const showSection = useCallback((sectionId) => {
    // Hide all sections
    const allSections = document.querySelectorAll('section, .skills-wrap, .certs-wrap, .contact-wrap');
    allSections.forEach(sec => sec.classList.remove('active-section'));
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active-section');
    }
    
    setActiveSection(sectionId);
  }, []);

  // Update active section when route changes
  useEffect(() => {
    const currentSection = getCurrentSection();
    showSection(currentSection);
  }, [location.pathname, getCurrentSection, showSection]);

  return (
    <div className="App">
      {/* Background Orbs */}
      <div className="bg-orb orb1"></div>
      <div className="bg-orb orb2"></div>
      <div className="bg-orb orb3"></div>
      
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;