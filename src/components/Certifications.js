import React, { useEffect, useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState({});

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

  const certifications = [
    {
      id: 1,
      issuer: 'Infosys',
      name: 'AI Certification Program',
      date: 'Aug 2025',
      credentialId: 'INF-AI-2025-042',
      link: 'https://www.infosys.com/certification/your-certificate-id',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Python'],
      description: 'Completed comprehensive AI training program covering machine learning, deep learning, and AI applications in enterprise environments.',
      file: '/certificates/infosys-ai-cert.png',
      fileType: 'image',
      fileName: 'Infosys_AI_Certificate.png'
    },
    {
      id: 2,
      issuer: 'NPTEL · SWAYAM',
      name: 'Introduction to Cloud Computing',
      date: 'Apr 2025',
      credentialId: 'NPTEL-CC-2025-042',
      link: 'https://nptel.ac.in/noc/certificate/your-certificate-id',
      skills: ['Cloud Computing', 'AWS', 'Azure', 'Google Cloud'],
      description: 'Understanding cloud concepts, deployment models, and major cloud service providers with hands-on labs.',
      file: '/certificates/nptel-cloud-cert.png',
      fileType: 'image',
      fileName: 'NPTEL_Cloud_Certificate.png'
    },
    {
      id: 3,
      issuer: 'CSE Pathshala',
      name: 'Unlocking DSA with C++',
      date: 'Mar 2024',
      credentialId: 'DSA-CPP-2024-089',
      link: 'https://www.csepathshala.com/certificate/your-certificate-id',
      skills: ['Data Structures', 'Algorithms', 'C++', 'Problem Solving'],
      description: 'Mastered essential data structures and algorithms with hands-on implementation in C++. Completed 100+ coding challenges.',
      file: '/certificates/dsa-cert.png',
      fileType: 'image',
      fileName: 'DSA_Certificate.png'
    },
    {
      id: 4,
      issuer: 'freeCodeCamp',
      name: 'Responsive Web Design (V8)',
      date: 'Oct 2023',
      credentialId: 'fcc-12345-67890',
      link: 'https://www.freecodecamp.org/certification/fcc99385cbb-fd01-490f-9b5a-83bce25113e1/responsive-web-design',
      skills: ['HTML', 'CSS', 'Flexbox', 'Grid', 'Responsive Design'],
      description: 'Built responsive websites using HTML5 and CSS3 with modern design principles. Created 5+ responsive web projects.',
      file: '/certificates/freecodecamp-cert.png',
      fileType: 'image',
      fileName: 'freeCodeCamp_Certificate.png'
    }
  ];

  const openPreviewModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
    
    // Disable custom cursor when modal is open to prevent conflicts
    const cursor = document.querySelector('.cursor');
    const cursorRing = document.querySelector('.cursor-ring');
    if (cursor) cursor.style.display = 'none';
    if (cursorRing) cursorRing.style.display = 'none';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
    
    // Re-enable custom cursor when modal closes
    const cursor = document.querySelector('.cursor');
    const cursorRing = document.querySelector('.cursor-ring');
    if (cursor) cursor.style.display = 'block';
    if (cursorRing) cursorRing.style.display = 'block';
  };

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageError = (certId) => {
    setImageError(prev => ({ ...prev, [certId]: true }));
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showModal]);

  return (
    <>
      <div className="certs-wrap full-width" id="certifications" style={{ padding: '80px 80px', background: 'var(--bg2)' }}>
        <div className="certs-inner">
          <div className="reveal">
            <p className="section-label">Credentials</p>
            <h2 className="section-title">Certifications<br /><span className="dim">& Courses</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="certs-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px'
          }}>
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="cert-card reveal" 
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '28px',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Decorative gradient line at top */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.4s',
                  transformOrigin: 'left'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scaleX(1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scaleX(0)'}
                />
                
                {/* Certificate Thumbnail */}
                <div 
                  style={{
                    width: '100%',
                    height: '180px',
                    marginBottom: '20px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, var(--surface), var(--surface2))',
                    position: 'relative',
                    cursor: 'pointer',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}
                  onClick={() => openPreviewModal(cert)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  {!imageError[cert.id] ? (
                    <img 
                      src={cert.file}
                      alt={cert.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={() => handleImageError(cert.id)}
                    />
                  ) : (
                    <div style={{
                      textAlign: 'center',
                      padding: '20px'
                    }}>
                      <div style={{ fontSize: '48px', marginBottom: '12px' }}>🖼️</div>
                      <div style={{ fontSize: '11px', color: 'var(--accent)', marginBottom: '4px' }}>Certificate Image</div>
                      <div style={{ fontSize: '10px', color: 'var(--muted)' }}>Click to preview</div>
                    </div>
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '9px',
                    color: 'white',
                    backdropFilter: 'blur(4px)'
                  }}>
                    🖼️ Certificate
                  </div>
                </div>
                
                {/* Issuer Badge */}
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(124, 58, 237, 0.1)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  color: 'var(--accent)',
                  marginBottom: '16px',
                  letterSpacing: '1px'
                }}>
                  {cert.issuer}
                </div>
                
                {/* Certificate Name */}
                <div style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '12px',
                  lineHeight: 1.4,
                  fontFamily: "'Syne', sans-serif"
                }}>
                  {cert.name}
                </div>
                
                {/* Date and Credential ID */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--border)'
                }}>
                  <div style={{
                    fontSize: '11px',
                    color: 'var(--accent2)',
                    letterSpacing: '1px'
                  }}>
                    📅 {cert.date}
                  </div>
                  <div style={{
                    fontSize: '9px',
                    color: 'var(--muted)',
                    fontFamily: 'monospace'
                  }}>
                    ID: {cert.credentialId}
                  </div>
                </div>
                
                {/* Skills/Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '24px'
                }}>
                  {cert.skills.map(skill => (
                    <span key={skill} className="skill-tag" style={{
                      padding: '4px 10px',
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      borderRadius: '20px',
                      fontSize: '8px',
                      color: 'var(--muted)',
                      transition: 'all 0.2s'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Preview Button Only */}
                <button
                  onClick={() => openPreviewModal(cert)}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: '600',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontFamily: "'DM Mono', monospace"
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
                  <span style={{ fontSize: '14px' }}>👁️</span>
                  Preview Certificate
                  <span style={{ fontSize: '12px' }}>→</span>
                </button>
              </div>
            ))}
          </div>
          
          {/* Additional Stats Section */}
          <div className="reveal" style={{ marginTop: '60px', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              gap: '40px',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '60px',
              padding: '20px 40px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent)', fontFamily: "'Syne', sans-serif" }}>4+</div>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '1px' }}>Certifications</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent2)', fontFamily: "'Syne', sans-serif" }}>150+</div>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '1px' }}>Hours of Learning</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent3)', fontFamily: "'Syne', sans-serif" }}>Verified</div>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '1px' }}>by Industry Leaders</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Certificate Preview */}
      {showModal && selectedCert && (
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
          onClick={closeModal}
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
                <div style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '4px' }}>{selectedCert.issuer}</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>{selectedCert.name}</div>
              </div>
              <button
                onClick={closeModal}
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
            
            {/* Image Viewer */}
            <div style={{
              flex: 1,
              overflow: 'auto',
              padding: '24px',
              background: 'var(--bg)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '400px'
            }}>
              <img 
                src={selectedCert.file}
                alt={selectedCert.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  cursor: 'zoom-out'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div style="text-align: center; padding: 60px;">
                        <div style="font-size: 64px; margin-bottom: 20px;">🖼️</div>
                        <div style="color: var(--muted);">Unable to load image</div>
                        <div style="font-size: 12px; margin-top: 10px;">${selectedCert.name}</div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            
            {/* Modal Footer with Controls */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '0 0 28px 28px',
              gap: '16px'
            }}>
              <button
                onClick={() => downloadFile(selectedCert.file, selectedCert.fileName)}
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
                ⬇️ Download Certificate
              </button>
              <button
                onClick={closeModal}
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
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--bg);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--accent);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--accent2);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
          }
          
          .cert-card {
            padding: 20px !important;
          }
          
          .modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Certifications;