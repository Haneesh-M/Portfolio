import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = ["Software Engineer", "Full Stack Developer", "Tech Enthusiast"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, typingSpeed);
        return () => clearInterval(ticker);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const tick = () => {
        let i = loopNum % titles.length;
        let fullText = titles[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(prev => prev / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(2000); // Pause at end
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(150);
        }
    };

    return (
        <section id="home" className="hero">
            <div className="particles-layer"></div>
            <div className="container hero-container">

                <div className="hero-content">
                    <div className="profile-img-container">
                        {/* Replace with actual image: <img src="profile.jpg" alt="Markapudi Haneesh" /> */}
                        <div className="profile-placeholder">MH</div>
                    </div>

                    <h1 className="hero-name">Markapudi Haneesh</h1>
                    <h2 className="hero-title">
                        I'm a <span className="typing-text">{text}</span><span className="cursor">|</span>
                    </h2>

                    <p className="hero-tagline">
                        Motivated software engineer with a strong interest in building reliable, scalable, and user-focused solutions. Seeking opportunities to apply and expand technical skills in a dynamic engineering environment, contribute to impactful projects, and grow through collaboration, innovation, and continuous learning.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#resume" className="btn-outline">Download Resume</a>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div className="arrow-down"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
