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
                            <a href="#" className="social-btn">GitHub</a>
                            <a href="#" className="social-btn">LinkedIn</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
