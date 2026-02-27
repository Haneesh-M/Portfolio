import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Helmet Detection for Workplace Safety",
            category: "Machine Learning",
            description: "Built a two-stage object detection pipeline trained on 5,000-image dataset to identify helmets and improve workplace safety monitoring. Implemented color segmentation, edge detection, and regression-based classification.",
            achievement: "5000+ images trained",
            techStack: ["ML", "OpenCV", "Python", "Streamlit"],
            image: "helmet-detection-placeholder.jpg", // Placeholder
            github: "https://github.com/yourusername/helmet-detection",
            demo: "https://helmet-detection-demo.com",
            alignment: "left" // Image on left
        },
        {
            id: 2,
            title: "Social Media App",
            category: "Full Stack",
            description: "Full-stack social media application with core features including user profiles, post creation, likes, comments, and media sharing. Secure JWT-based authentication with real-time interactions and notifications.",
            achievement: "Real-time interactions",
            techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
            image: "social-media-placeholder.jpg",
            github: "https://github.com/yourusername/social-media",
            demo: "https://social-media-demo.com",
            alignment: "right" // Image on right
        },
        {
            id: 3,
            title: "Flora Distribution System",
            category: "Database",
            description: "MySQL-backed flora distribution system capable of tracking 1000+ records related to plant species, locations, and distribution history. Fully normalized relational schema (up to 3NF) with optimized queries.",
            achievement: "40% faster queries",
            techStack: ["XAMPP", "MySQL", "Database Design"],
            image: "flora-system-placeholder.jpg",
            github: "https://github.com/yourusername/flora-system",
            demo: null, // No live demo
            alignment: "left"
        },
        {
            id: 4,
            title: "AR/VR Bowling Game",
            category: "Game Development",
            description: "Developed an immersive AR/VR bowling game using Unity and C#, featuring realistic bowling mechanics, lane setup, and interactive gameplay. Physics-based ball and pin interactions with intuitive VR controls.",
            achievement: "Realistic physics simulation",
            techStack: ["Unity", "C#", "VR", "Physics Simulation"],
            image: "bowling-game-placeholder.jpg",
            github: "https://github.com/yourusername/vr-bowling",
            demo: "https://bowling-demo-video.com",
            alignment: "right"
        },
        {
            id: 5,
            title: "Drone Simulation",
            category: "Algorithms",
            description: "Python-based drone simulator leveraging graphs and Dijkstra's algorithm for real-time pathfinding in 3D environments. Optimized spatial data structures for autonomous UAV navigation in delivery and search-and-rescue operations.",
            achievement: "Real-time pathfinding",
            techStack: ["Python", "Dijkstra's", "Graph Algorithms", "3D Visualization"],
            image: "drone-sim-placeholder.jpg",
            github: "https://github.com/yourusername/drone-simulation",
            demo: null,
            alignment: "left"
        }
    ];

    return (
        <section id="projects" className="projects-section section">
            <div className="container" style={{ maxWidth: '1200px' }}>
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-list">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-row ${project.alignment === 'right' ? 'image-right' : 'image-left'}`}
                        >
                            <div className="project-image-side">
                                <div className="project-img-wrapper">
                                    {/* Replace with actual <img> later, using project.image */}
                                    <div className="project-img-placeholder">
                                        <span>{project.title.charAt(0)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="project-details-side glass-card">
                                <div className="project-details-content">
                                    <div className="project-header">
                                        <h3 className="project-title">{project.title}</h3>
                                        <span className="project-category">{project.category}</span>
                                    </div>

                                    <div className="project-achievement">
                                        🏆 <span>{project.achievement}</span>
                                    </div>

                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech-stack">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="tech-pill">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-actions">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                            GitHub
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
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
