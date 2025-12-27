import React, { useState } from 'react';

const plans = [
    {
        name: "Hobby",
        price: "0",
        description: "Perfect for experimenting.",
        features: ["50 generations/day", "Standard speed", "Public gallery", "Personal license"]
    },
    {
        name: "Pro",
        price: "29",
        featured: true,
        description: "For serious creators.",
        features: ["Unlimited generations", "Fast mode", "Private gallery", "Commercial license", "Priority support"]
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For teams and platforms.",
        features: ["API Access", "Custom models", "SSO", "SLA", "Dedicated account manager"]
    }
];

const Pricing = () => {
    const [yearly, setYearly] = useState(false);

    return (
        <section id="pricing" style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Simple <span className="gradient-text">Pricing</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Start for free and scale as you grow.</p>

                    <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', padding: '0.25rem', borderRadius: '99px' }}>
                        <button
                            onClick={() => setYearly(false)}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '99px',
                                background: !yearly ? 'var(--text-primary)' : 'transparent',
                                color: !yearly ? 'var(--bg-primary)' : 'var(--text-secondary)',
                                fontWeight: '600',
                                transition: 'all 0.2s'
                            }}
                        >Monthly</button>
                        <button
                            onClick={() => setYearly(true)}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '99px',
                                background: yearly ? 'var(--text-primary)' : 'transparent',
                                color: yearly ? 'var(--bg-primary)' : 'var(--text-secondary)',
                                fontWeight: '600',
                                transition: 'all 0.2s'
                            }}
                        >Yearly <span style={{ fontSize: '0.7em', color: '#10b981' }}>-20%</span></button>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: plan.featured ? '1px solid var(--primary-color)' : '1px solid var(--glass-border)',
                            transform: plan.featured ? 'scale(1.05)' : 'scale(1)',
                            position: 'relative'
                        }}>
                            {plan.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '99px',
                                    fontSize: '0.8rem',
                                    fontWeight: '700'
                                }}>MOST POPULAR</div>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{plan.description}</p>

                            <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>
                                {plan.price === 'Custom' ? 'Custom' : (
                                    <>
                                        ${yearly ? Math.floor(plan.price * 0.8) : plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '400' }}>/mo</span>
                                    </>
                                )}
                            </div>

                            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {plan.features.map((feat, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#10b981' }}>✓</span> {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={plan.featured ? "btn-primary" : "btn-secondary"} style={{ width: '100%' }}>
                                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
