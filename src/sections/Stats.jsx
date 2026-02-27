import React, { useEffect, useState, useRef } from 'react';
import './Stats.css';

const StatCard = ({ limit, title, suffix }) => {
    const [count, setCount] = useState(0);
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = limit / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= limit) {
                clearInterval(timer);
                setCount(limit);
            } else {
                setCount(start); // Using float values during increment
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, limit]);

    // Format count to show decimals for CGPA
    const displayCount = limit % 1 !== 0 ? count.toFixed(2) : Math.ceil(count);

    return (
        <div className="stat-card glass-card" ref={cardRef}>
            <h3 className="stat-number">
                {displayCount}{suffix}
            </h3>
            <p className="stat-title">{title}</p>
        </div>
    );
};

const Stats = () => {
    const statsData = [
        { limit: 10, title: "Projects Completed", suffix: "+" },
        { limit: 7, title: "Technologies", suffix: "+" },
        { limit: 5, title: "Certifications", suffix: "+" },
        { limit: 7.66, title: "CGPA", suffix: "" }
    ];

    return (
        <section className="stats-section container">
            <div className="stats-grid">
                {statsData.map((stat, index) => (
                    <StatCard
                        key={index}
                        limit={stat.limit}
                        title={stat.title}
                        suffix={stat.suffix}
                    />
                ))}
            </div>
        </section>
    );
};

export default Stats;
