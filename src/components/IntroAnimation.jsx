import React, { useState, useEffect } from 'react';
import './IntroAnimation.css';

const IntroAnimation = ({ onComplete }) => {
    const [phase, setPhase] = useState(1);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Phase timing matching the 8 second spec
        const timers = [
            setTimeout(() => setPhase(2), 1500),   // Explosion
            setTimeout(() => setPhase(3), 3000),   // Fire text
            setTimeout(() => setPhase(4), 5500),   // Golden rings
            setTimeout(() => setPhase(5), 7500),   // Fade out
            setTimeout(() => onComplete(), 8000)   // Complete
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    // Generate particles based on phase
    useEffect(() => {
        let newParticles = [];
        if (phase === 2) {
            // Explosion particles
            newParticles = Array.from({ length: 150 }).map((_, i) => ({
                id: `exp-${i}`,
                type: 'explosion',
                style: {
                    '--angle': `${Math.random() * 360}deg`,
                    '--distance': `${50 + Math.random() * 400}px`,
                    '--duration': `${0.5 + Math.random()}s`,
                    backgroundColor: ['#ff4500', '#ff8c00', '#ffd700', '#ffffff'][Math.floor(Math.random() * 4)],
                    width: `${3 + Math.random() * 5}px`,
                    height: `${3 + Math.random() * 5}px`
                }
            }));
        } else if (phase === 3 || phase === 4) {
            // Ember particles 
            const count = 60;
            newParticles = Array.from({ length: count }).map((_, i) => ({
                id: `emb-${i}`,
                type: 'ember',
                style: {
                    left: `${10 + Math.random() * 80}%`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                    '--drift': Math.random(),
                    width: `${2 + Math.random() * 4}px`,
                    height: `${2 + Math.random() * 4}px`
                }
            }));
        }
        setParticles(newParticles);
    }, [phase]);

    return (
        <div className={`cinematic-intro phase-${phase}`}>
            {/* Phase 1: Opening (pure black background) */}
            {phase === 1 && <div className="opening-scene" />}

            {/* Phase 2-5: Text with effects */}
            {phase >= 2 && (
                <div className="intro-text-wrapper">
                    <h1 className={
                        phase === 2 ? 'explosion-text' :
                            phase === 3 ? 'fire-text' :
                                phase === 4 ? 'golden-text' :
                                    'fade-out-text'
                    }>
                        HANEESH<br />
                        MARKAPUDI
                    </h1>
                </div>
            )}

            {/* Particles Layer */}
            <div className="particles-layer">
                {particles.map(p => (
                    <div
                        key={p.id}
                        className={`particle ${p.type}`}
                        style={p.style}
                    />
                ))}
            </div>

            {/* Phase 4: Orbital rings */}
            {phase >= 4 && phase < 5 && (
                <div className="orbit-rings-container">
                    <div className="orbit-ring ring-1" />
                    <div className="orbit-ring ring-2" />
                    <div className="orbit-ring ring-3" />
                </div>
            )}

            {/* Skip Button */}
            <button
                className="skip-intro-btn"
                onClick={onComplete}
            >
                Skip Intro &rarr;
            </button>
        </div>
    );
};

export default IntroAnimation;
