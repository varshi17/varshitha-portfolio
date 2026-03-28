import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animation for hero elements
    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el, index) => {
      el.style.animation = `fadeup 0.8s ${0.2 + index * 0.2}s forwards`;
    });
  }, []);

  return (
    <section id="home" className="active-section" style={{
      minHeight: '100vh',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '120px 80px 80px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)',
        backgroundSize: '55px 55px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 60% 50%, black 30%, transparent 100%)'
      }} />
      
      <p className="hero-animate" style={{
        fontSize: '10px',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        opacity: 0
      }}>
        <span style={{ display: 'block', width: '32px', height: '2px', background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }} />
        ✦ available for internships & collabs
      </p>
      
      <h1 className="hero-animate" style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(48px, 8vw, 110px)',
        fontWeight: 700,
        lineHeight: 0.92,
        letterSpacing: '-3px',
        opacity: 0
      }}>
        <span style={{
          fontSize: '0.38em',
          letterSpacing: '5px',
          fontWeight: 400,
          color: 'var(--muted)',
          display: 'block',
          marginBottom: '10px',
          fontFamily: "'DM Mono', monospace"
        }}>hello, I'm</span>
        <span style={{
          background: 'linear-gradient(135deg, #ffffff, var(--accent))',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>Varshitha</span>
      </h1>
      
      <p className="hero-animate" style={{
        fontFamily: "'Instrument Serif', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(18px, 2.5vw, 28px)',
        color: 'var(--muted)',
        marginTop: '24px',
        opacity: 0
      }}>
        Full Stack Developer & <span style={{ color: 'var(--accent2)', fontStyle: 'normal', fontWeight: 500 }}>DSA Architect</span>
      </p>
      
      <p className="hero-animate" style={{
        maxWidth: '550px',
        marginTop: '28px',
        fontSize: '12px',
        color: 'var(--muted)',
        lineHeight: 1.9,
        opacity: 0
      }}>
    Bachelor of Technology in Computer Science and Engineering student at Lovely Professional University. I build full-stack web applications, solve algorithmic challenges, and love turning complex problems into clean, elegant code.
      </p>
      
      <div className="hero-animate" style={{
        display: 'flex',
        gap: '20px',
        marginTop: '44px',
        flexWrap: 'wrap',
        opacity: 0
      }}>
        <button onClick={() => navigate('/projects')} className="btn-primary">✨ Explore Work</button>
        <button onClick={() => navigate('/contact')} className="btn-outline">📬 Contact Me</button>
        <a href="https://github.com/varshi17" target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '48px',
        right: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0,
        animation: 'fadeup 0.8s 1.4s forwards'
      }}>
        <div style={{
          width: '1.5px',
          height: '55px',
          background: 'linear-gradient(var(--accent), transparent)',
          animation: 'scrollline 2s ease-in-out infinite'
        }} />
        <span style={{
          fontSize: '8px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          writingMode: 'vertical-rl'
        }}>Scroll</span>
      </div>
      
      <style jsx>{`
        @keyframes fadeup {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollline {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
};

export default Home;