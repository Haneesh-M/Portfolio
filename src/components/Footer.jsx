import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="copyright">
                        &copy; {year} Markapudi Haneesh. All rights reserved.
                    </p>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-badge">
                        Built with ⚛️ React.js
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
