import React from 'react';
import './Experience.css';
import smartinternzLogo from '../images/smartinternz.png';

// Create a fallback text logo component if image fails to load
const FallbackLogo = ({ name }) => {
    const initials = name.substring(0, 2).toUpperCase();
    return (
        <div className="company-logo-text">
            {initials}
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Software Engineer Virtual Intern",
            company: "SmartInternz",
            location: "Remote",
            duration: "August 2024 - October 2024",
            status: "completed",
            logo: smartinternzLogo,
            useTextLogo: false,
            responsibilities: [
                "Developed and deployed full-stack web applications using React.js and Node.js",
                "Built 'Social-Media-App' robust dynamic social network platform to foster connections",
                "Implemented user authentication, content sharing & dynamic feed, and real-time chat with Socket.io",
                "Utilized MongoDB for database management and MUI/Bootstrap for responsive frontend UI"
            ],
            techStack: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Express.js"],
            alignment: "left"
        },
        {
            id: 2,
            title: "SDE Intern",
            company: "Cred Resolve",
            location: "Onsite,Gurugram, Haryana",
            duration: "",
            status: "current",
            logo: "amritaLogo",
            useTextLogo: true, // Will just use AM or similar text for now
            responsibilities: [
                "Dealing with full-stack applications",
                "Managing project timelines and code reviews for various assignments"
            ],
            techStack: ["React.js", "Node.js", "HTML", "CSS", "JavaScript", "Spring boot"],
            alignment: "right"
        }
    ];

    return (
        <section id="experience" className="experience-section section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title gradient-text">EXPERIENCE</h2>
                    <p className="section-subtitle">Professional Journey</p>
                    <div className="title-underline"></div>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`experience-card ${exp.alignment} glass-card`} style={{ animationDelay: `${(index + 1) * 0.1}s` }}>

                            {/* Timeline Connection */}
                            <div className="timeline-connector"></div>
                            <div className="timeline-dot"></div>

                            {/* Card Content */}
                            <div className="company-logo">
                                {exp.useTextLogo ? <FallbackLogo name={exp.company} /> : <img src={exp.logo} alt={`${exp.company} logo`} />}
                            </div>

                            <div className={`status-badge ${exp.status}`}>
                                {exp.status}
                            </div>

                            <h3 className="job-title">{exp.title}</h3>
                            <h4 className="company-name">{exp.company}</h4>

                            <div className="job-meta">
                                <span>🗓️ {exp.duration}</span>
                                <span>•</span>
                                <span>📍 {exp.location}</span>
                            </div>

                            <ul className="responsibilities">
                                {exp.responsibilities.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>

                            <div className="tech-tags">
                                {exp.techStack.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
