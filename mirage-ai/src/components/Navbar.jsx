import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(3, 0, 20, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      padding: scrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '30px', height: '30px', background: 'linear-gradient(45deg, #7000ff, #00c6ff)', borderRadius: '8px' }}></div>
          :imagine <span className="gradient-text">AI</span>
        </a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-links">
          <a href="#features" style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }}>Features</a>
          <a href="#gallery" style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }}>Gallery</a>
          <a href="#pricing" style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }}>Pricing</a>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Login</button>
          <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
