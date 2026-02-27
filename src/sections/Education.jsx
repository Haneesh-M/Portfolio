import React, { useEffect, useRef } from 'react';
import './Education.css';

const EducationItem = ({ index, institution, degree, date, grade, location }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.2 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const isLeft = index % 2 === 0;

    return (
        <div className={`timeline-wrapper ${isLeft ? 'left' : 'right'}`} ref={itemRef}>
            <div className="timeline-marker"></div>
            <div className="timeline-content glass-card">
                <div className="edu-header">
                    <h3 className="institution">{institution}</h3>
                    <span className="edu-date">{date}</span>
                </div>
                <h4 className="degree">{degree}</h4>
                <div className="edu-footer">
                    <span className="location">📍 {location}</span>
                    <span className="grade-badge">{grade}</span>
                </div>
            </div>
        </div>
    );
};

const Education = () => {
    const educationData = [
        {
            institution: "Amrita School of Engineering",
            degree: "B.Tech - Computer Science and Engineering",
            date: "Sept 2022 – June 2026",
            grade: "CGPA: 7.66",
            location: "Ettimadai, Tamil Nadu"
        },
        {
            institution: "Sri Chaitanya Junior College",
            degree: "MPC - Higher Secondary Education",
            date: "June 2020 – Aug 2022",
            grade: "96.5%",
            location: "Gudavalli, Andhra Pradesh"
        },
        {
            institution: "Viswabharathi High School",
            degree: "Secondary Education",
            date: "July 2019 – June 2020",
            grade: "98.8%",
            location: "Gudivada, Andhra Pradesh"
        }
    ];

    return (
        <section id="education" className="education-section section">
            <div className="container">
                <h2 className="section-title">Education Journey</h2>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {educationData.map((edu, index) => (
                        <EducationItem key={index} index={index} {...edu} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
