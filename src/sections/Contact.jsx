import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            alert('Form submission not implemented yet. Thank you for your message!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-layout">

                    {/* Contact Form */}
                    <div className="contact-form-container glass-card">
                        <h3 className="form-title">Send Message</h3>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'error-input' : ''}
                                />
                                {errors.name && <span className="error-text">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error-input' : ''}
                                />
                                {errors.email && <span className="error-text">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'error-input' : ''}
                                ></textarea>
                                {errors.message && <span className="error-text">{errors.message}</span>}
                            </div>

                            <button type="submit" className="btn-primary submit-btn" title="Form submission not implemented">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info-container glass-card">
                        <div className="info-header">
                            <span className="status-badge">Open to opportunities</span>
                            <h3>Contact Information</h3>
                            <p>Feel free to reach out for collaborations, job opportunities, or just to say hi!</p>
                        </div>

                        <div className="info-list">
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p>Ettimadai, Tamil Nadu, India</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📞</span>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91-9110735314</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">✉️</span>
                                <div>
                                    <h4>Email</h4>
                                    <p>haneeshmarkapudi4@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/Haneesh-M" className="social-btn github-btn" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/haneesh-markapudi-933b25287/" className="social-btn linkedin-btn" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
