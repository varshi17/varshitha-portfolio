import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
      <div className="footer-copy" style={{ fontSize: '10px', color: 'var(--muted)' }}>© 2025 Varshitha Naidu — Built with 💜 & precision</div>
      <div className="social-links">
        <a href="https://github.com/varshi17" target="_blank" rel="noreferrer" className="social-link" style={{ color: 'var(--muted)', textDecoration: 'none', marginLeft: '20px' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/varshitha-naidu-39470a283/" target="_blank" rel="noreferrer" className="social-link" style={{ color: 'var(--muted)', textDecoration: 'none', marginLeft: '20px' }}>LinkedIn</a>
        <a href="mailto:varshithanaidu.17@gmail.com" className="social-link" style={{ color: 'var(--muted)', textDecoration: 'none', marginLeft: '20px' }}>Email</a>
      </div>
    </footer>
  );
};

export default Footer;