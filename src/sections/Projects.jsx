import React from 'react';
import socialMediaImg from '../images/Social-App.png';
import arvrImg from '../images/ARVR.png';
import expenseSharingImg from '../images/Expense Sharing.png';
import taskLedgerImg from '../images/Split Ledger.png';
import floraDistImg from '../images/Flora Distribution.png';
import droneImg from '../images/Drone.png';
import hotelMngmtImg from '../images/Hotel management.png';
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
            image: "helmet-detection-placeholder.jpg", // Helmet detection still needs an image 
            github: "https://github.com/Haneesh-M",
            demo: null,
            alignment: "left"
        },
        {
            id: 2,
            title: "Social Media App",
            category: "Full Stack",
            description: "Full-stack social media application with core features including user profiles, post creation, likes, comments, and media sharing. Secure JWT-based authentication with real-time interactions and notifications.",
            achievement: "Real-time interactions",
            techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
            image: socialMediaImg,
            github: "https://github.com/Haneesh-M/Social-Media-App",
            demo: "https://drive.google.com/file/d/1NAJUWKlISWn1HISJHt1iStsJ0IJCkwZ7/view?usp=drive_link",
            alignment: "right" // Image on right
        },
        {
            id: 3,
            title: "Flora Distribution System",
            category: "Database",
            description: "MySQL-backed flora distribution system capable of tracking 1000+ records related to plant species, locations, and distribution history. Fully normalized relational schema (up to 3NF) with optimized queries.",
            achievement: "40% faster queries",
            techStack: ["XAMPP", "MySQL", "Database Design"],
            image: floraDistImg,
            github: "https://github.com/Haneesh-M",
            demo: null,
            alignment: "left"
        },
        {
            id: 4,
            title: "AR/VR Bowling Game",
            category: "Game Development",
            description: "Developed an immersive AR/VR bowling game using Unity and C#, featuring realistic bowling mechanics, lane setup, and interactive gameplay. Physics-based ball and pin interactions with intuitive VR controls.",
            achievement: "Realistic physics simulation",
            techStack: ["Unity", "C#", "VR", "Physics Simulation"],
            image: arvrImg,
            github: "https://github.com/Haneesh-M",
            demo: "https://www.youtube.com/shorts/Rg_eR9xKZS4",
            alignment: "right"
        },
        {
            id: 5,
            title: "Drone Simulation",
            category: "Algorithms",
            description: "Python-based drone simulator leveraging graphs and Dijkstra's algorithm for real-time pathfinding in 3D environments. Optimized spatial data structures for autonomous UAV navigation in delivery and search-and-rescue operations.",
            achievement: "Real-time pathfinding",
            techStack: ["Python", "Dijkstra's", "Graph Algorithms", "3D Visualization"],
            image: droneImg,
            github: "https://github.com/Haneesh-M",
            demo: null,
            alignment: "left"
        },
        {
            id: 6,
            title: "Expense Sharing Application",
            category: "Full Stack",
            description: "A professional full-stack application designed to manage shared expenses, track group balances, and simplify debt settlements. Features include group management, diverse split strategies, and debt simplification with a React frontend and Node.js backend.",
            achievement: "ACID-compliant transactions",
            techStack: ["React.js", "Node.js", "Express.js", "SQLite", "Tailwind CSS"],
            image: expenseSharingImg,
            github: "https://github.com/Haneesh-M/Expense-Sharing-Application",
            demo: "https://drive.google.com/file/d/1pe_KZwUG95lUSGdf7fZLgJS020yAp5Sd/view?usp=drive_link",
            alignment: "right"
        },
        {
            id: 7,
            title: "Task Ledger",
            category: "Full Stack",
            description: "A productivity and expense intelligence system leveraging a React frontend and Spring Boot backend. Includes 3D interfaces, realtime KPI metrics, Kanban-style tracking, and robust JWT-based security.",
            achievement: "Real-time analytics & 3D UI",
            techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Recharts"],
            image: taskLedgerImg,
            github: "https://github.com/Haneesh-M/Task-Ledger",
            demo: "https://task-ledger485.vercel.app/login",
            alignment: "left"
        },
        {
            id: 8,
            title: "Hotel Management System",
            category: "Frontend Design",
            description: "Developed a responsive Hotel Management System frontend ensuring smooth booking flow and customer detail management. Focused on a clean UI/UX simulating real-world hotel workflows across various screen sizes.",
            achievement: "Responsive UI/UX workflows",
            techStack: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
            image: hotelMngmtImg,
            github: "https://github.com/Haneesh-M",
            demo: null,
            alignment: "right"
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
                                    {(typeof project.image === 'string' && project.image.includes('placeholder')) || !project.image ? (
                                        <div className="project-img-placeholder">
                                            <span>{project.title.charAt(0)}</span>
                                        </div>
                                    ) : (
                                        <img src={project.image} alt={project.title} className="project-img" />
                                    )}
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
