import React from 'react';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        {
            title: "Supervised Machine Learning",
            issuer: "Coursera",
            icon: "📈",
            url: "https://drive.google.com/file/d/1zfnxgIuQuafdYjO8dj7uhinLQrqOKl80/view?usp=drive_link" // Add your certificate URL here
        },
        {
            title: "Unsupervised Machine Learning",
            issuer: "Coursera",
            icon: "🔍",
            url: "https://drive.google.com/file/d/1KfpkNv-8QnjM9Kj8-wdwvnEfOMgmbtxY/view?usp=drive_link" // Add your certificate URL here
        },
        {
            title: "Full Stack (MERN)",
            issuer: "SmartInternz",
            icon: "🌐",
            url: "https://drive.google.com/file/d/1_Umz2sUMcO6CkfZQli4825balUtjHgia/view?usp=sharing" // Add your certificate URL here
        },
        {
            title: "Web Development Bootcamp",
            issuer: "Udemy",
            icon: "💻",
            url: "https://drive.google.com/file/d/1aSBJ47z9SZ-3OmevucEnKxX0mw8NoPkn/view?usp=drive_link" // Add your certificate URL here
        },
        {
            title: "Data Science",
            issuer: "Infosys Springboard",
            icon: "🤖",
            url: "https://drive.google.com/file/d/1iw_ypDogcJwdskCwf8NQtygWbE_0FUkX/view?usp=drive_link" // Add your certificate URL here
        },
        {
            title: "Block Chain Technology",
            issuer: "Anokha(Amrita)",
            icon: "⛓️",
            url: "https://drive.google.com/file/d/1qbG8OmuLHOLIoFH5O_dzjgqEvxx02qm_/view?usp=drive_link" // Add your certificate URL here
        },
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
                                {cert.url ? (
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-btn">
                                        View Certificate ↗
                                    </a>
                                ) : (
                                    <button className="cert-btn disabled" title="Certificate link coming soon" disabled>
                                        View Certificate ↗
                                    </button>
                                )}
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
