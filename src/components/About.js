import React, { useState, useEffect } from 'react';

const About = () => {
  const [showCVModal, setShowCVModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
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

  const openCVModal = () => {
    setShowCVModal(true);
    document.body.style.overflow = 'hidden';
    
    // Disable custom cursor when modal is open
    const cursor = document.querySelector('.cursor');
    const cursorRing = document.querySelector('.cursor-ring');
    if (cursor) cursor.style.display = 'none';
    if (cursorRing) cursorRing.style.display = 'none';
  };

  const closeCVModal = () => {
    setShowCVModal(false);
    document.body.style.overflow = 'auto';
    
    // Re-enable custom cursor when modal closes
    const cursor = document.querySelector('.cursor');
    const cursorRing = document.querySelector('.cursor-ring');
    if (cursor) cursor.style.display = 'block';
    if (cursorRing) cursorRing.style.display = 'block';
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/VarshithaCV.pdf';
    link.download = 'Varshitha_Naidu_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && showCVModal) {
        closeCVModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showCVModal]);

  return (
    <>
      <section id="about">
        <div className="reveal">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Code. Create.<br /><span className="dim">Elevate.</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '70px',
          alignItems: 'center'
        }}>
          {/* Photo Section */}
          <div className="reveal">
            <div style={{
              background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              border: '1px solid var(--border)',
              borderRadius: '32px',
              transition: 'transform 0.3s',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              {!photoError ? (
                <img 
                  src="/photo.png"
                  alt="Varshitha Naidu" 
                  style={{
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--accent)',
                    boxShadow: '0 0 30px rgba(124,58,237,0.2)',
                    transition: 'transform 0.4s'
                  }}
                  onError={() => setPhotoError(true)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.borderColor = 'var(--accent2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                />
              ) : (
                <div style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '48px' }}>👩‍💻</span>
                  <span style={{ fontSize: '12px', color: 'white' }}>Varshitha Naidu</span>
                </div>
              )}
            </div>
          </div>
          
          {/* About Text Section */}
          <div className="about-text reveal">
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '20px', fontSize: '13px' }}>
              I'm <strong style={{ color: 'var(--text)' }}>Varshitha Naidu</strong>, a passionate developer with a hunger for solving complex problems. My journey blends full-stack development with deep algorithmic thinking — I've built <strong>Real‑time Weather Advisory Systems</strong> and <strong>Word Search engines</strong>.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '20px', fontSize: '13px' }}>
              Currently exploring scalable architectures and cloud-native tools. I believe in writing code that's both human-friendly and machine‑efficient. Let's build the future, one commit at a time.
            </p>
            
            {/* View CV Button */}
            <div style={{ display: 'flex', gap: '16px', margin: '16px 0 12px', flexWrap: 'wrap' }}>
              <button 
                onClick={openCVModal}
                className="btn-primary" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <span>📄</span>
                View CV
                <span>→</span>
              </button>
              
              <button 
                onClick={downloadCV}
                className="btn-outline" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <span>⬇️</span>
                Download CV
              </button>
            </div>
            
            <div className="about-details" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: '20px',
              marginTop: '28px'
            }}>
              <div className="detail-item" style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '16px', background: 'rgba(124,58,237,0.02)', borderRadius: '0 8px 8px 0' }}>
                <div className="detail-label" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>📍 University</div>
                <div className="detail-val" style={{ fontSize: '12px', color: 'var(--text)', marginTop: '5px', fontWeight: 500 }}>Lovely Professional University</div>
              </div>
              <div className="detail-item" style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '16px', background: 'rgba(124,58,237,0.02)', borderRadius: '0 8px 8px 0' }}>
                <div className="detail-label" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>📧 Email</div>
                <div className="detail-val" style={{ fontSize: '12px', color: 'var(--text)', marginTop: '5px', fontWeight: 500 }}>varshithanaidu.17@gmail.com</div>
              </div>
              <div className="detail-item" style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '16px', background: 'rgba(124,58,237,0.02)', borderRadius: '0 8px 8px 0' }}>
                <div className="detail-label" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>📞 Mobile</div>
                <div className="detail-val" style={{ fontSize: '12px', color: 'var(--text)', marginTop: '5px', fontWeight: 500 }}>+91-9704050399</div>
              </div>
              <div className="detail-item" style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '16px', background: 'rgba(124,58,237,0.02)', borderRadius: '0 8px 8px 0' }}>
                <div className="detail-label" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>🎯 Status</div>
                <div className="detail-val" style={{ fontSize: '12px', color: 'var(--text)', marginTop: '5px', fontWeight: 500 }}>Open to Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Preview Modal */}
      {showCVModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(15px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={closeCVModal}
        >
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--accent)',
              borderRadius: '28px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              animation: 'slideUp 0.3s ease',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '28px 28px 0 0'
            }}>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '4px' }}>Resume / CV</div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>
                  Varshitha Naidu - CV
                </div>
              </div>
              <button
                onClick={closeCVModal}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(124, 58, 237, 0.2)',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  fontSize: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(124, 58, 237, 0.2)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
              >
                ✕
              </button>
            </div>
            
            {/* CV Image Viewer */}
            <div style={{
              flex: 1,
              overflow: 'auto',
              padding: '24px',
              background: 'var(--bg)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '500px'
            }}>
              {!imageError ? (
                <img 
                  src="/VarshithaCV.png"
                  alt="Varshitha Naidu CV/Resume"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    cursor: 'zoom-out'
                  }}
                  onError={() => {
                    setImageError(true);
                  }}
                />
              ) : (
                <div style={{ textAlign: 'center', padding: '60px' }}>
                  <div style={{ fontSize: '64px', marginBottom: '20px' }}>📄</div>
                  <div style={{ fontSize: '18px', color: 'var(--accent)', marginBottom: '12px' }}>CV Preview Not Available</div>
                  <div style={{ color: 'var(--muted)', marginBottom: '24px', fontSize: '13px' }}>
                    The CV image couldn't be loaded. You can download the PDF version instead.
                  </div>
                  <button
                    onClick={downloadCV}
                    style={{
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                      border: 'none',
                      borderRadius: '10px',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: "'DM Mono', monospace"
                    }}
                  >
                    ⬇️ Download CV (PDF)
                  </button>
                </div>
              )}
            </div>
            
            {/* Modal Footer with Actions */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '0 0 28px 28px',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={downloadCV}
                style={{
                  padding: '10px 24px',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  border: 'none',
                  borderRadius: '10px',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(124,58,237,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                ⬇️ Download CV (PDF)
              </button>
              
              <button
                onClick={closeCVModal}
                style={{
                  padding: '10px 24px',
                  background: 'rgba(124, 58, 237, 0.1)',
                  border: '1px solid var(--accent)',
                  borderRadius: '10px',
                  color: 'var(--accent)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(124, 58, 237, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(124, 58, 237, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive Design for About Page */
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .about-profile-img {
            width: 220px !important;
            height: 220px !important;
          }
        }
        
        @media (max-width: 550px) {
          .about-profile-img {
            width: 180px !important;
            height: 180px !important;
          }
        }
      `}</style>
    </>
  );
};

export default About;