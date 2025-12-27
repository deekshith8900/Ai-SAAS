import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#000', padding: '4rem 0 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                <div>
                    <a href="#" style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '24px', height: '24px', background: 'linear-gradient(45deg, #7000ff, #00c6ff)', borderRadius: '6px' }}></div>
                        :imagine <span className="gradient-text">AI</span>
                    </a>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Empowering creators with the most advanced AI image generation technology.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Product</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Features</a></li>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Integrations</a></li>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Pricing</a></li>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Changelog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Resources</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Documentation</a></li>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Community</a></li>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Blog</a></li>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Help Center</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</a></li>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Terms of Service</a></li>
                        <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <p>&copy; {new Date().getFullYear()} :imagine AI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
