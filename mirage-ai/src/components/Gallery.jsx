import React from 'react';

const images = [
    "https://images.unsplash.com/photo-1635398075344-9c882d6b359f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614726365778-bb3b5b63435c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop"
];

const Gallery = () => {
    return (
        <section id="gallery" style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                            Made with <span className="gradient-text">:imagine</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Explore community creations.</p>
                    </div>
                    <button className="btn-secondary">View All Work</button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {images.map((src, index) => (
                        <div key={index} style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            aspectRatio: index % 2 === 0 ? '1' : '3/4', // Simple masonry-ish feel
                            cursor: 'pointer'
                        }}
                            className="group"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    display: 'block'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                opacity: 0,
                                transition: 'opacity 0.3s',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '1.5rem'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                            >
                                <span style={{ fontWeight: '600' }}>Prompt: Futuristic city...</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
