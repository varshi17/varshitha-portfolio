import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ activeSection }) => {
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'experience', label: 'Training', path: '/experience' },
    { id: 'certifications', label: 'Certifications', path: '/certifications' },
    { id: 'projects', label: 'Projects and Education', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <nav id="navbar" style={{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '18px 60px',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid var(--border)',
  transition: 'all 0.3s'
}}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '22px',
          color: 'var(--accent)',
          letterSpacing: '-0.5px'
        }}>
          V<span style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>N</span>
        </div>
      </Link>
      <ul style={{
        display: 'flex',
        gap: '36px',
        listStyle: 'none'
      }}>
        {navItems.map(item => (
          <li key={item.id}>
            <Link
              to={item.path}
              style={{
                color: isActive(item.path) ? 'var(--accent)' : 'var(--muted)',
                textDecoration: 'none',
                fontSize: '11px',
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                fontWeight: 500,
                transition: 'color 0.2s',
                position: 'relative',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.target.style.color = isActive(item.path) ? 'var(--accent)' : 'var(--muted)'}
            >
              {item.label}
              <span style={{
                position: 'absolute',
                bottom: '-6px',
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                transform: isActive(item.path) ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.3s',
                borderRadius: '2px'
              }} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;