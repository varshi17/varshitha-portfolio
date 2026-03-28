import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      position.current = { x: e.clientX, y: e.clientY };
      if (cursor) {
        cursor.style.left = position.current.x + 'px';
        cursor.style.top = position.current.y + 'px';
      }
    };

    const animateRing = () => {
      ringPosition.current.x += (position.current.x - ringPosition.current.x) * 0.12;
      ringPosition.current.y += (position.current.y - ringPosition.current.y) * 0.12;
      if (ring) {
        ring.style.left = ringPosition.current.x + 'px';
        ring.style.top = ringPosition.current.y + 'px';
      }
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    animateRing();

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn-primary, .btn-outline, input, textarea, .skill-tag, .cert-card');
    const addActiveClass = () => ring?.classList.add('active');
    const removeActiveClass = () => ring?.classList.remove('active');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addActiveClass);
      el.addEventListener('mouseleave', removeActiveClass);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addActiveClass);
        el.removeEventListener('mouseleave', removeActiveClass);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          background: 'var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%,-50%)',
          mixBlendMode: 'screen'
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          width: '34px',
          height: '34px',
          border: '1.5px solid var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%,-50%)',
          transition: 'all 0.2s ease',
          opacity: 0.55
        }}
      />
    </>
  );
};

export default CustomCursor;