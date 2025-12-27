import React, { useState } from 'react';

const Generator = () => {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const handleGenerate = async () => {
        if (!prompt) return;

        setLoading(true);
        setImage(null);

        // MOCK API CALL
        // In a real app, you would fetch from an endpoint like /api/generate
        // const response = await fetch('/api/generate', { method: 'POST', body: JSON.stringify({ prompt }) });
        // const data = await response.json();

        // Simulating delay for realistic effect
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Using Unsplash source for high-quality mock results based on keywords (using 'art' + random param to avoid caching same image)
        const randomSeed = Math.floor(Math.random() * 1000);
        const mockImage = `https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=1000&auto=format&fit=crop&random=${randomSeed}`;

        setImage(mockImage);
        setLoading(false);
    };

    return (
        <section id="generate" style={{ padding: '8rem 0', background: 'var(--bg-secondary)', position: 'relative' }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(112,0,255,0.05) 0%, rgba(3,0,20,0) 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Start <span className="gradient-text">Creating</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Enter a prompt and watch the magic happen.
                    </p>
                </div>

                <div className="glass" style={{
                    padding: '3rem',
                    borderRadius: '24px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexDirection: 'column' }}>
                        <div style={{ position: 'relative' }}>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Describe your imagination... (e.g., 'A cyberpunk city with neon rain')"
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(0,0,0,0.3)',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    resize: 'none',
                                    minHeight: '120px',
                                    fontFamily: 'inherit'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button
                                onClick={handleGenerate}
                                disabled={loading || !prompt}
                                className="btn-primary"
                                style={{
                                    padding: '1rem 3rem',
                                    fontSize: '1.1rem',
                                    opacity: (loading || !prompt) ? 0.7 : 1,
                                    cursor: (loading || !prompt) ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                {loading ? 'Generating...' : 'Generate Art'}
                                {!loading && <span>✨</span>}
                            </button>
                        </div>
                    </div>

                    {/* Result Area */}
                    <div style={{
                        minHeight: '400px',
                        background: 'rgba(0,0,0,0.2)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px dashed rgba(255,255,255,0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {loading && (
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    border: '3px solid rgba(255,255,255,0.1)',
                                    borderTopColor: 'var(--primary-color)',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite',
                                    margin: '0 auto 1rem'
                                }} />
                                <p style={{ color: 'var(--text-secondary)' }}>Dreaming up your image...</p>
                                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                            </div>
                        )}

                        {!loading && !image && (
                            <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>🖼️</div>
                                <p>Your creation will appear here</p>
                            </div>
                        )}

                        {image && !loading && (
                            <div className="animate-fade-in" style={{ width: '100%', height: '100%', position: 'relative' }}>
                                <img
                                    src={image}
                                    alt="Generated result"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '600px' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    right: '1rem',
                                    display: 'flex',
                                    gap: '0.5rem'
                                }}>
                                    <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', background: 'rgba(0,0,0,0.8)' }}>
                                        Download
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Generator;
