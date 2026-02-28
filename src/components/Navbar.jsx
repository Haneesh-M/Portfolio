import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import profilePic from '../images/Navbar-Haneesh.jpg';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'];

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container container">
                <a href="#home" className="logo">
                    <img src={profilePic} alt="Profile" className="nav-profile-pic" />
                    <span className="logo-text">Haneesh</span>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="nav-link">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-actions">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <a href="https://drive.google.com/file/d/1x4y_DHviq6NVK90ge3Q6FVtdBFCYHI0l/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary resume-btn">Resume</a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`mobile-toggle ${isOpen ? 'open' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-header">
                    <img src={profilePic} alt="Profile" className="nav-profile-pic mobile" />
                    <span className="logo-text mobile-logo">Haneesh</span>
                </div>
                <ul className="mobile-links">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="mobile-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
