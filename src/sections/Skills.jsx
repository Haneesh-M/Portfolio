import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        { id: 'All', icon: '🌟', label: 'All Skills' },
        { id: 'Languages', icon: '💻', label: 'Languages' },
        { id: 'Frontend', icon: '🎨', label: 'Frontend' },
        { id: 'Backend', icon: '⚙️', label: 'Backend' },
        { id: 'Databases', icon: '🗄️', label: 'Databases' },
        { id: 'Tools', icon: '🛠️', label: 'Tools & Tech' }
    ];

    const allSkills = [
        { name: 'Python', category: 'Languages', icon: '🐍' },
        { name: 'C', category: 'Languages', icon: 'C' },
        { name: 'C++', category: 'Languages', icon: 'C++' },
        { name: 'JavaScript', category: 'Languages', icon: 'JS' },
        { name: 'HTML', category: 'Languages', icon: '📄' },
        { name: 'CSS', category: 'Languages', icon: '🎨' },
        { name: 'React.js', category: 'Frontend', icon: '⚛️' },
        { name: 'HTML5', category: 'Frontend', icon: '🌐' },
        { name: 'CSS3', category: 'Frontend', icon: '💅' },
        { name: 'Node.js', category: 'Backend', icon: '🟢' },
        { name: 'Express.js', category: 'Backend', icon: '🚂' },
        { name: 'MongoDB', category: 'Databases', icon: '🍃' },
        { name: 'MySQL', category: 'Databases', icon: '🐬' },
        { name: 'Unity', category: 'Tools', icon: '🎮' },
        { name: 'Git & GitHub', category: 'Tools', icon: '🐙' },
        { name: 'XAMPP', category: 'Tools', icon: '🟠' },
        { name: 'VS Code', category: 'Tools', icon: '💻' },
        { name: 'OpenCV', category: 'Tools', icon: '👁️' }
    ];

    const filteredSkills = activeCategory === 'All'
        ? allSkills
        : allSkills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="skills-section section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-layout">
                    {/* Sidebar */}
                    <div className="skills-sidebar glass-card">
                        <h3 className="sidebar-title">Categories</h3>
                        <ul className="category-list">
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <button
                                        className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat.id)}
                                    >
                                        <span className="cat-icon">{cat.icon}</span>
                                        <span className="cat-label">{cat.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="skills-content">
                        <div className="skills-grid">
                            {filteredSkills.map((skill, index) => (
                                <div key={index} className="skill-card glass-card">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <h4 className="skill-name">{skill.name}</h4>
                                    <div className="skill-category-tag">{skill.category}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
