import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'ML/CV', 'Full Stack', 'Database', 'AR/VR', 'Algorithms'];

    const projects = [
        {
            title: "Helmet Detection for Workplace Safety",
            category: "ML/CV",
            featured: true,
            description: "Built two-stage object detection pipeline trained on 5,000-image dataset. Flags non-compliant individuals in real-time video feeds.",
            tech: ['ML', 'OpenCV', 'Python', 'Streamlit'],
            metrics: "5000+ images trained",
            github: "#",
            demo: "#"
        },
        {
            title: "Social Media App",
            category: "Full Stack",
            featured: true,
            description: "Full-stack social media application with user profiles, post creation, likes, comments, and secure JWT-based authentication.",
            tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
            metrics: "Real-time interactions",
            github: "#",
            demo: "#"
        },
        {
            title: "Flora Distribution System",
            category: "Database",
            featured: false,
            description: "MySQL-backed flora distribution system tracking 1000+ records with fully normalized relational schema (up to 3NF).",
            tech: ['XAMPP', 'MySQL', 'Database Design'],
            metrics: "40% faster queries",
            github: "#",
            demo: null
        },
        {
            title: "AR/VR Bowling Game",
            category: "AR/VR",
            featured: false,
            description: "Developed immersive AR/VR bowling game with realistic mechanics, physics-based interactions, and collision detection.",
            tech: ['Unity', 'C#', 'Virtual Reality', 'Physics Simulation'],
            metrics: "Realistic mechanics",
            github: "#",
            demo: "#"
        },
        {
            title: "Drone Simulation",
            category: "Algorithms",
            featured: false,
            description: "Python-based drone simulator leveraging graphs and Dijkstra's algorithm for real-time pathfinding in 3D environments.",
            tech: ['Python', 'Graph Algorithms', 'Dijkstra', 'Pathfinding'],
            metrics: "Real-time pathfinding",
            github: "#",
            demo: null
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects-section section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="project-filters">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-image-container">
                                {/* Placeholder Image */}
                                <div className="project-image-placeholder">
                                    <span>{project.title.charAt(0)}</span>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="btn-primary">GitHub</a>
                                        {project.demo && <a href={project.demo} className="btn-outline" style={{ background: 'var(--card-bg)' }}>Live Demo</a>}
                                    </div>
                                </div>
                            </div>

                            <div className="project-info">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-metrics">
                                    <span className="metric-icon">🏆</span> {project.metrics}
                                </div>

                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
