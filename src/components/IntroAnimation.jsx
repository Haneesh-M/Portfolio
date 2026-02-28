import React, { useState, useRef, useEffect } from 'react';
import './IntroAnimation.css';
import introAudio from '../images/intro-sound.mp3';

const IntroAnimation = ({ onComplete, audioConfig, isCompleted }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [phase, setPhase] = useState(1);
    const [particles, setParticles] = useState([]);
    const videoRef = useRef(null);

    // Audio state
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(() => {
        // Look up preference or default to !audioConfig.enabled
        if (!audioConfig) return true;
        const saved = localStorage.getItem('introAudioEnabled');
        if (saved !== null) {
            return !JSON.parse(saved); // If enabled is true, isMuted is false
        }
        return !audioConfig.enabled;
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);

    // Video Autoplay Initialization 
    useEffect(() => {
        if (isCompleted) return;
        if (!videoError && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(error => {
                console.error("Autoplay prevented or video not found:", error);
                setVideoError(true);
            });
        }
    }, [videoError, isCompleted]);

    // Audio Initialization
    useEffect(() => {
        if (audioConfig && audioConfig.enabled && audioConfig.autoplay && !isMuted) {
            const playAudio = async () => {
                try {
                    if (audioRef.current) {
                        audioRef.current.volume = audioConfig.volume;
                        await audioRef.current.play();
                        setIsPlaying(true);
                    }
                } catch (error) {
                    console.log('Audio autoplay blocked:', error);
                    setAutoplayBlocked(true); // Show blocked notice instead of faking mute state
                }
            };
            playAudio();
        }
    }, [audioConfig, isMuted]);

    // CSS Fallback logic sequence
    useEffect(() => {
        if (isCompleted) return;
        if (videoError) {
            const timers = [
                setTimeout(() => setPhase(2), 1500),
                setTimeout(() => setPhase(3), 3000),
                setTimeout(() => setPhase(4), 5500),
                setTimeout(() => setPhase(5), 7500),
                setTimeout(() => {
                    handleEnding();
                }, 8000)
            ];
            return () => timers.forEach(clearTimeout);
        }
    }, [videoError, isCompleted]);

    // CSS Fallback particles logic
    useEffect(() => {
        if (isCompleted) return;
        if (videoError) {
            let newParticles = [];
            if (phase === 2) {
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
        }
    }, [phase, videoError]);

    const handleEnding = () => {
        setIsFadingOut(true);

        // Check if audio should continue or stop
        if (audioConfig && !audioConfig.continueInPortfolio && audioRef.current) {
            audioRef.current.pause();
        }

        setTimeout(() => {
            onComplete();
        }, 500);
    };

    const handleSkip = () => {
        handleEnding();
    };

    const toggleMute = () => {
        // If it was blocked by browser, treat the first toggle click as an unconditional 'Play' bypass
        if (autoplayBlocked) {
            setAutoplayBlocked(false);
            if (audioRef.current) {
                audioRef.current.volume = audioConfig.volume || 0.7;
                audioRef.current.play().catch(e => console.log('Playback blocked', e));
                setIsPlaying(true);
            }
            return;
        }

        const newState = !isMuted;
        setIsMuted(newState);
        localStorage.setItem('introAudioEnabled', JSON.stringify(!newState));

        if (audioRef.current) {
            if (newState) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.volume = audioConfig.volume || 0.7;
                audioRef.current.play().catch(e => console.log('Playback blocked', e));
                setIsPlaying(true);
            }
        }
    };

    // Shared generic elements between video and css (Audio & Buttons)
    const renderSharedUI = () => (
        <>
            {autoplayBlocked && (
                <div className="audio-blocked-notice">
                    <button onClick={() => {
                        if (audioRef.current) {
                            audioRef.current.volume = audioConfig.volume || 0.7;
                            audioRef.current.play();
                            setIsPlaying(true);
                            setAutoplayBlocked(false);
                            setIsMuted(false);
                        }
                    }}>
                        🔊 Click to Enable Sound
                    </button>
                </div>
            )}
            {audioConfig && (
                <audio
                    ref={audioRef}
                    preload="auto"
                    loop={audioConfig.continueInPortfolio}
                >
                    {/* Linked dynamically via Vite import */}
                    <source src={introAudio} type="audio/mpeg" />
                </audio>
            )}

            {audioConfig && audioConfig.allowUserToggle && (
                <button
                    className={`audio-toggle ${isPlaying && !isMuted ? 'playing' : ''}`}
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? (
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z" />
                        </svg>
                    )}
                </button>
            )}

            <button className="skip-intro-btn" onClick={handleSkip}>
                Skip Intro &rarr;
            </button>
        </>
    );

    // If Intro is already completed, just render the Audio & Toggle Button 
    // seamlessly hanging out in the background of the app.
    if (isCompleted) {
        return <>{renderSharedUI()}</>;
    }

    // Video render Native Mode
    if (!videoError) {
        return (
            <div className={`video-intro-container ${isFadingOut ? 'fade-out' : ''}`}>
                <video
                    ref={videoRef}
                    className="intro-video"
                    src="./intro.mp4"
                    autoPlay
                    muted // Keep muted to force autoplay on video, we use <audio> for sound
                    playsInline
                    onEnded={handleEnding}
                    onError={() => setVideoError(true)}
                />
                {renderSharedUI()}
            </div>
        );
    }

    // --- CSS Fallback Render ---
    return (
        <div className={`cinematic-intro phase-${phase} ${isFadingOut ? 'force-fade' : ''}`}>
            {phase === 1 && <div className="opening-scene" />}

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

            <div className="particles-layer">
                {particles.map(p => (
                    <div key={p.id} className={`particle ${p.type}`} style={p.style} />
                ))}
            </div>

            {phase >= 4 && phase < 5 && (
                <div className="orbit-rings-container">
                    <div className="orbit-ring ring-1" />
                    <div className="orbit-ring ring-2" />
                    <div className="orbit-ring ring-3" />
                </div>
            )}

            {renderSharedUI()}
        </div>
    );
};

export default IntroAnimation;
