import React from 'react';

const Skills = () => {
  React.useEffect(() => {
    // Skill bars animation
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width + '%';
            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('.skill-bar-fill').forEach(bar => barObserver.observe(bar));
    
    // Reveal animation
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    
    return () => {
      barObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="skills-wrap full-width" id="skills" style={{ padding: '100px 80px', background: 'var(--bg2)' }}>
      <div className="skills-inner">
        <div className="reveal">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Technical &<br /><span className="dim">Soft Skills</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '28px',
          marginBottom: '48px'
        }}>
          <div className="skill-cat reveal" style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            padding: '28px',
            transition: '0.25s'
          }}>
            <div className="skill-cat-title" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '16px', marginBottom: '18px', color: 'var(--text)' }}>💻 Languages</div>
            <div className="skill-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['C++', 'JavaScript', 'Java', 'SQL'].map(tag => (
                <span key={tag} className="skill-tag" style={{ padding: '5px 12px', background: 'var(--surface2)', border: '1px solid var(--border)', fontSize: '9px', letterSpacing: '1px', color: 'var(--muted)', borderRadius: '20px' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="skill-cat reveal">
            <div className="skill-cat-title">⚙️ Frameworks</div>
            <div className="skill-tags">
              {['React.js', 'Node.js', 'Express.js', 'Tailwind'].map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="skill-cat reveal">
            <div className="skill-cat-title">🛠️ Tools</div>
            <div className="skill-tags">
              {['Git/GitHub', 'MongoDB', 'REST APIs', 'VS Code'].map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="skill-cat reveal">
            <div className="skill-cat-title">🧠 Soft Skills</div>
            <div className="skill-tags">
              {['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Adaptability', 'Critical Thinking', 'Leadership'].map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="skill-bars reveal" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginTop: '20px'
        }}>
          <div>
            <div className="skill-bar-item">
              <div className="skill-bar-top" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', color: 'var(--text)' }}>React/JS</span>
                <span style={{ fontSize: '9px', color: 'var(--accent)' }}>88%</span>
              </div>
              <div className="skill-bar-track" style={{ height: '2px', background: 'var(--surface2)', borderRadius: '2px', overflow: 'hidden' }}>
                <div className="skill-bar-fill" data-width="88" style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--accent2))', borderRadius: '2px', width: 0 }}></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-bar-top"><span>C++ / DSA</span><span>82%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="82"></div></div>
            </div>
          </div>
          <div>
            <div className="skill-bar-item">
              <div className="skill-bar-top"><span>Node.js</span><span>78%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="78"></div></div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-bar-top"><span>HTML/CSS</span><span>90%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="90"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;