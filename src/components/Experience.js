import React from 'react';

const Experience = () => {
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
    <section id="experience">
      <div className="reveal">
        <p className="section-label">Training</p>
        <h2 className="section-title">Learning Path<br /><span className="dim">& Certifications</span></h2>
        <div className="section-line"></div>
      </div>
      <div className="timeline" style={{ position: 'relative', paddingLeft: '32px' }}>
        <div style={{ position: 'absolute', left: '6px', top: '12px', bottom: '12px', width: '1.5px', background: 'linear-gradient(var(--accent), var(--accent2))' }} />
        <div className="timeline-item" style={{ marginBottom: '48px', position: 'relative' }}>
          <div className="timeline-dot" style={{ position: 'absolute', left: '-26px', top: '6px', width: '10px', height: '10px', background: 'var(--accent2)', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(244,63,94,0.2)' }} />
          <div className="timeline-period" style={{ fontSize: '9px', letterSpacing: '2px', color: 'var(--accent2)', marginBottom: '8px' }}>Jul 2025</div>
          <div className="timeline-role" style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--text)' }}>DSA Training Program</div>
          <div className="timeline-company" style={{ color: 'var(--muted)', fontSize: '12px', marginBottom: '12px' }}>Board Infinity</div>
          <ul className="timeline-bullets" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ color: 'var(--muted)', fontSize: '11.5px', marginBottom: '6px', paddingLeft: '18px', position: 'relative' }}>Advanced algorithms: Backtracking, Graphs, DP with optimized solutions</li>
            <li style={{ color: 'var(--muted)', fontSize: '11.5px', marginBottom: '6px', paddingLeft: '18px', position: 'relative' }}>Built Word Search in Grid project with pruning & memory efficiency</li>
            <li style={{ color: 'var(--muted)', fontSize: '11.5px', marginBottom: '6px', paddingLeft: '18px', position: 'relative' }}>Strengthened problem-solving skills with 100+ coding challenges</li>
          </ul>
          <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
            {['C++', 'Algorithms', 'Data Structures'].map(tag => (
              <span key={tag} className="skill-tag" style={{ padding: '5px 12px', background: 'var(--surface2)', border: '1px solid var(--border)', fontSize: '9px', borderRadius: '20px', color: 'var(--muted)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="reveal" style={{ marginTop: '56px' }}>
        <p className="section-label">Achievements</p>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>Milestones</h2>
        <div className="section-line"></div>
      </div>
      <div className="achievements" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '18px', marginTop: '20px' }}>
        <div className="achievement-card" style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'center', borderRadius: '16px' }}>
          <span style={{ fontSize: '24px' }}>🧩</span>
          <div>LeetCode 80+ problems solved <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)' }}>Dec 2025</span></div>
        </div>
        <div className="achievement-card">
          <span>🏅</span>
          <div>8 Badges HackerRank <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)' }}>Sep 2025</span></div>
        </div>
        <div className="achievement-card">
          <span>🎓</span>
          <div>95.6% Intermediate (PCM) <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)' }}>2023</span></div>
        </div>
        <div className="achievement-card">
          <span>⭐</span>
          <div>95.5% Matriculation <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)' }}>2021</span></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;