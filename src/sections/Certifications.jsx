import React from 'react';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        { title: "Machine Learning", issuer: "Coursera", icon: "🤖" },
        { title: "Supervised Machine Learning", issuer: "Coursera", icon: "📈" },
        { title: "Unsupervised Machine Learning", issuer: "Coursera", icon: "🔍" },
        { title: "Full Stack (MERN)", issuer: "SmartInternz", icon: "🌐" },
        { title: "Web Development Bootcamp", issuer: "Udemy", icon: "💻" }
    ];

    return (
        <section id="certifications" className="certifications-section section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <div key={index} className="cert-card glass-card">
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                            </div>
                            <div className="cert-badge">Verified</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
