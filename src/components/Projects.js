import React from 'react';

const Projects = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="reveal">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Featured<br /><span className="dim">Projects</span></h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '28px' }}>
        <div className="project-card" style={{ background: 'var(--card)', border: '1px solid var(--border)', transition: 'all 0.3s', padding: '24px', borderRadius: '20px' }}>
          <div className="project-num" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--border)', marginBottom: '12px' }}>01</div>
          <div style={{ color: 'var(--accent2)', fontSize: '10px' }}>Full Stack · Web App</div>
          <div className="project-name" style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0' }}>Weather & Crop Advisory</div>
          <div className="project-desc" style={{ fontSize: '12px', color: 'var(--muted)', margin: '12px 0' }}>Real‑time weather API integration, rule‑based crop recommendations, dynamic dashboard with Node/React.</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['React', 'Node.js', 'MongoDB'].map(tag => (
              <span key={tag} className="skill-tag" style={{ padding: '5px 12px', background: 'var(--surface2)', border: '1px solid var(--border)', fontSize: '9px', borderRadius: '20px', color: 'var(--muted)' }}>{tag}</span>
            ))}
          </div>
          <div className="project-links" style={{ marginTop: '16px' }}>
            <a href="https://github.com/varshi17" target="_blank" rel="noreferrer" style={{ color: 'var(--accent3)', textDecoration: 'none' }}>GitHub →</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-num">02</div>
          <div style={{ color: 'var(--accent2)', fontSize: '10px' }}>Algorithm · C++</div>
          <div className="project-name">Word Search in Grid</div>
          <div className="project-desc">Efficient multi‑directional search with pruning, backtracking and optimized memory usage.</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['C++', 'Backtracking', 'DSA'].map(tag => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
          <div className="project-links" style={{ marginTop: '16px' }}>
            <a href="https://github.com/varshi17" target="_blank" rel="noreferrer" style={{ color: 'var(--accent3)', textDecoration: 'none' }}>GitHub →</a>
          </div>
        </div>
      </div>
      <div className="reveal" style={{ marginTop: '64px' }}>
        <p className="section-label">Education</p>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px,3vw,40px)' }}>Academic<br /><span className="dim">Background</span></h2>
        <div className="section-line"></div>
      </div>
      <div className="edu-grid">
        <div className="edu-card" style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '20px', marginBottom: '20px' }}>
          <div>
            <div style={{ color: 'var(--accent2)', fontSize: '10px' }}>2023 – Present</div>
            <div className="edu-degree" style={{ fontWeight: 700, fontSize: '16px' }}>B.Tech CSE</div>
            <div style={{ color: 'var(--muted)' }}>LPU, Punjab</div>
          </div>
          <div>
            <div className="edu-score" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>6.72 CGPA</div>
          </div>
        </div>
        <div className="edu-card" style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '20px', marginBottom: '20px' }}>
          <div>
            <div style={{ color: 'var(--accent2)', fontSize: '10px' }}>2022 – 2023</div>
            <div className="edu-degree">Intermediate (PCM)</div>
            <div style={{ color: 'var(--muted)' }}>Pranava Junior College</div>
          </div>
          <div>
            <div className="edu-score">95.6%</div>
          </div>
        </div>
        <div className="edu-card">
          <div>
            <div style={{ color: 'var(--accent2)', fontSize: '10px' }}>2020 – 2021</div>
            <div className="edu-degree">Matriculation</div>
            <div style={{ color: 'var(--muted)' }}>Lakshya High School</div>
          </div>
          <div>
            <div className="edu-score">95.5%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;