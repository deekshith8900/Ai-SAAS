import React from 'react';

const Hero = () => {
    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '8rem 2rem 4rem',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '20%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(112,0,255,0.4) 0%, rgba(3,0,20,0) 70%)',
                filter: 'blur(60px)',
                zIndex: -1,
                animation: 'pulse 10s infinite alternate'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0,198,255,0.3) 0%, rgba(3,0,20,0) 70%)',
                filter: 'blur(60px)',
                zIndex: -1,
                animation: 'pulse 8s infinite alternate-reverse'
            }} />

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                zIndex: 1
            }}>
                <div className="animate-fade-in">
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '99px',
                        marginBottom: '1.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--secondary-color)'
                    }}>
                        ✨ Next Gen AI Image Generation
                    </div>
                    <h1 style={{
                        fontSize: '4rem',
                        lineHeight: '1.1',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Visualize Your <br />
                        <span className="gradient-text">Wildest Dreams</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '500px'
                    }}>
                        Create stunning, high-fidelity images in seconds with our state-of-the-art AI. From photorealistic landscapes to abstract art.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Start Creating Free
                        </button>
                        <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            View Gallery
                        </button>
                    </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.2s', position: 'relative' }}>
                    <div className="glass" style={{
                        padding: '1rem',
                        borderRadius: '24px',
                        transform: 'rotate(-5deg)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                            alt="AI Art"
                            style={{
                                width: '100%',
                                borderRadius: '16px',
                                display: 'block'
                            }}
                        />
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#333' }}></div>
                            <div>
                                <div style={{ width: '120px', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                                <div style={{ width: '80px', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginTop: '0.25rem' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Floating elements */}
                    <div className="glass" style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '-20px',
                        padding: '1rem',
                        borderRadius: '16px',
                        minWidth: '180px'
                    }}>
                        <div style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>Generation Time</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--secondary-color)' }}>0.8s</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
