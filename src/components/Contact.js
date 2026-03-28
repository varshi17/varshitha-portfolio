import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ show: false, message: '', type: '' });
  const [toastShow, setToastShow] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // EmailJS Configuration - REPLACE WITH YOUR ACTUAL CREDENTIALS
  // Follow these steps to get your credentials:
  // 1. Go to https://www.emailjs.com/
  // 2. Sign up for a free account
  // 3. Create an Email Service (Gmail, Outlook, etc.)
  // 4. Create an Email Template
  // 5. Get your Public Key from Account > API Keys
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID

  useEffect(() => {
    // Initialize EmailJS
    if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const showToastMessage = () => {
    setToastShow(true);
    setTimeout(() => setToastShow(false), 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { senderName, senderEmail, subject, message } = formData;
    
    // Validation
    if (!senderName || !senderEmail || !subject || !message) {
      setStatus({ 
        show: true, 
        message: '❌ Please fill all fields', 
        type: 'error' 
      });
      setTimeout(() => setStatus({ show: false, message: '', type: '' }), 3000);
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      setStatus({ 
        show: true, 
        message: '❌ Please enter a valid email address', 
        type: 'error' 
      });
      setTimeout(() => setStatus({ show: false, message: '', type: '' }), 3000);
      return;
    }
    
    setIsSending(true);
    
    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || 
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
      // Demo mode - simulate sending
      setTimeout(() => {
        setStatus({ 
          show: true, 
          message: '✅ Demo: Message logged! To enable real email, configure EmailJS credentials in the code.', 
          type: 'success' 
        });
        setFormData({ senderName: '', senderEmail: '', subject: '', message: '' });
        showToastMessage();
        setIsSending(false);
        setTimeout(() => setStatus({ show: false, message: '', type: '' }), 5000);
      }, 800);
      return;
    }
    
    // Send real email using EmailJS
    try {
      const templateParams = {
        from_name: senderName,
        from_email: senderEmail,
        subject: subject,
        message: message,
        to_email: 'varshithanaidu.17@gmail.com',
        reply_to: senderEmail
      };
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      if (response.status === 200) {
        setStatus({ 
          show: true, 
          message: '✅ Message sent successfully! Varshitha will get back to you soon.', 
          type: 'success' 
        });
        setFormData({ senderName: '', senderEmail: '', subject: '', message: '' });
        showToastMessage();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        show: true, 
        message: '❌ Failed to send message. Please try again or email directly: varshithanaidu.17@gmail.com', 
        type: 'error' 
      });
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus({ show: false, message: '', type: '' }), 4000);
    }
  };

  return (
    <div className="contact-wrap full-width" id="contact" style={{ padding: '90px 80px', background: 'var(--bg2)' }}>
      <div className="contact-inner">
        <div className="reveal">
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title">Get in<br /><span className="dim">Touch</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '64px' }}>
          {/* Contact Information */}
          <div className="reveal">
            <p style={{ marginBottom: '28px', color: 'var(--muted)' }}>
              Have an opportunity or just want to say hi? Fill the form — I reply within 24h.
            </p>
            <div className="contact-item" style={{ display: 'flex', gap: '14px', marginBottom: '24px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ 
                width: '42px', 
                height: '42px', 
                background: 'var(--surface)', 
                border: '1px solid var(--border)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '14px', 
                color: 'var(--accent)', 
                fontSize: '20px' 
              }}>✉️</div>
              <div>
                <div className="detail-label" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>Email</div>
                <div>varshithanaidu.17@gmail.com</div>
              </div>
            </div>
            <div className="contact-item" style={{ display: 'flex', gap: '14px', marginBottom: '24px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ 
                width: '42px', 
                height: '42px', 
                background: 'var(--surface)', 
                border: '1px solid var(--border)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '14px', 
                color: 'var(--accent)', 
                fontSize: '20px' 
              }}>📞</div>
              <div>
                <div className="detail-label" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>Mobile</div>
                <div>+91-9704050399</div>
              </div>
            </div>
            <div className="contact-item" style={{ display: 'flex', gap: '14px', marginBottom: '24px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ 
                width: '42px', 
                height: '42px', 
                background: 'var(--surface)', 
                border: '1px solid var(--border)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '14px', 
                color: 'var(--accent)', 
                fontSize: '20px' 
              }}>🔗</div>
              <div>
                <div className="detail-label" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>LinkedIn</div>
                <div>
                  <a href="https://www.linkedin.com/in/varshitha-naidu-39470a283/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent3)' }}>
                    varshitha-naidu
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-item" style={{ display: 'flex', gap: '14px', marginBottom: '24px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ 
                width: '42px', 
                height: '42px', 
                background: 'var(--surface)', 
                border: '1px solid var(--border)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '14px', 
                color: 'var(--accent)', 
                fontSize: '20px' 
              }}>🐙</div>
              <div>
                <div className="detail-label" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>GitHub</div>
                <div>
                  <a href="https://github.com/varshi17" target="_blank" rel="noreferrer" style={{ color: 'var(--accent3)' }}>
                    github.com/varshi17
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="senderName"
                placeholder="Your Name *"
                className="form-input"
                value={formData.senderName}
                onChange={handleChange}
                style={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)', 
                  color: 'var(--text)', 
                  padding: '12px 16px', 
                  fontFamily: "'DM Mono', monospace", 
                  borderRadius: '14px', 
                  width: '100%', 
                  marginBottom: '16px',
                  transition: 'all 0.3s'
                }}
                required
              />
              <input
                type="email"
                id="senderEmail"
                placeholder="Email Address *"
                className="form-input"
                value={formData.senderEmail}
                onChange={handleChange}
                style={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)', 
                  color: 'var(--text)', 
                  padding: '12px 16px', 
                  fontFamily: "'DM Mono', monospace", 
                  borderRadius: '14px', 
                  width: '100%', 
                  marginBottom: '16px' 
                }}
                required
              />
              <input
                type="text"
                id="subject"
                placeholder="Subject *"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                style={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)', 
                  color: 'var(--text)', 
                  padding: '12px 16px', 
                  fontFamily: "'DM Mono', monospace", 
                  borderRadius: '14px', 
                  width: '100%', 
                  marginBottom: '16px' 
                }}
                required
              />
              <textarea
                id="message"
                placeholder="Your Message *"
                className="form-textarea"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                style={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)', 
                  color: 'var(--text)', 
                  padding: '12px 16px', 
                  fontFamily: "'DM Mono', monospace", 
                  borderRadius: '14px', 
                  width: '100%', 
                  marginBottom: '16px',
                  resize: 'vertical'
                }}
                required
              />
              
              {status.show && (
                <div className="form-status" style={{
                  display: 'block',
                  padding: '12px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  marginTop: '12px',
                  textAlign: 'center',
                  background: status.type === 'success' ? 'rgba(124,58,237,0.15)' : 'rgba(244,63,94,0.1)',
                  border: status.type === 'success' ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(244,63,94,0.3)',
                  color: status.type === 'success' ? 'var(--accent)' : 'var(--accent2)'
                }}>
                  {status.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn-send" 
                disabled={isSending}
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  color: 'white',
                  border: 'none',
                  padding: '14px 24px',
                  width: '100%',
                  borderRadius: '40px',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  cursor: isSending ? 'not-allowed' : 'pointer',
                  marginTop: '16px',
                  transition: 'all 0.3s',
                  opacity: isSending ? 0.7 : 1
                }}
              >
                {isSending ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span className="spinner"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      <div className={`toast ${toastShow ? 'show' : ''}`} style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: '#1e1a2f',
        borderLeft: '5px solid var(--accent)',
        padding: '14px 24px',
        borderRadius: '16px',
        zIndex: 9999,
        transform: toastShow ? 'translateX(0)' : 'translateX(120%)',
        transition: '0.3s',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <div className="toast-title" style={{ fontWeight: 'bold', color: 'var(--accent)', marginBottom: '4px' }}>✨ Message Sent!</div>
        <div className="toast-msg" style={{ fontSize: '11px', color: 'var(--muted)' }}>Varshitha will reply within 24 hours.</div>
      </div>
      
      {/* Spinner Animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;