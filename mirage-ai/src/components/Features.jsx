import React from 'react';

const features = [
    {
        title: "Instant Generation",
        description: "Generate high-resolution images in under 1 second with our optimized diffusion models.",
        icon: "⚡"
    },
    {
        title: "Photorealistic Quality",
        description: "Industry-leading fidelity with 8k resolution support and perfect lighting control.",
        icon: "💎"
    },
    {
        title: "Style Mimicry",
        description: "Upload a reference image and instantly generate new art in that specific style.",
        icon: "🎨"
    },
    {
        title: "Commercial License",
        description: "Full ownership of every asset you generate. Use it for any commercial project.",
        icon: "📜"
    },
    {
        title: "Batch Processing",
        description: "Generate persistent variations of a single prompt in one go.",
        icon: "🔄"
    },
    {
        title: "API Access",
        description: "Integrate our generation engine directly into your apps with our robust API.",
        icon: "🔌"
    }
];

const Features = () => {
    return (
        <section id="features" style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Unleash Your <span className="gradient-text">Creativity</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Powerful tools designed for professional creators, developers, and artists.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2rem',
                            borderRadius: '24px',
                            transition: 'transform 0.3s ease, border-color 0.3s',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '1.5rem',
                                background: 'var(--glass-bg)',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '20px'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
