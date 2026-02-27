import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-image-wrapper">
                        <div className="about-image glass-card">
                            <div className="image-placeholder">
                                <span>Code. Build. Innovate.</span>
                            </div>
                        </div>
                        <div className="about-experience glass-card">
                            <h3>B.Tech Student</h3>
                            <p>Amrita School of Engineering</p>
                            <p className="text-accent">Class of 2026</p>
                        </div>
                    </div>

                    <div className="about-text">
                        <h3 className="about-subtitle">Objective</h3>
                        <p className="about-description">
                            Motivated software engineer with a strong interest in building reliable, scalable, and user-focused solutions. Seeking opportunities to apply and expand technical skills in a dynamic engineering environment, contribute to impactful projects, and grow through collaboration, innovation, and continuous learning.
                        </p>

                        <h3 className="about-subtitle mt-2">Key Strengths</h3>
                        <ul className="strength-list">
                            <li>
                                <span className="strength-icon">🚀</span>
                                <span>Building reliable, scalable solutions</span>
                            </li>
                            <li>
                                <span className="strength-icon">💻</span>
                                <span>Strong technical foundation</span>
                            </li>
                            <li>
                                <span className="strength-icon">📚</span>
                                <span>Continuous learning mindset</span>
                            </li>
                            <li>
                                <span className="strength-icon">🤝</span>
                                <span>Collaboration and innovation</span>
                            </li>
                        </ul>

                        <div className="about-cta">
                            <a href="https://drive.google.com/file/d/1x4y_DHviq6NVK90ge3Q6FVtdBFCYHI0l/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary">Download Resume</a>
                            <a href="#contact" className="btn-outline">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
