// src/pages/Contact.jsx
// Contact form with Name, Email, and Message fields.
// Uses useState to manage form data and show a success message.

import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  // Form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Whether the form was successfully submitted
  const [submitted, setSubmitted] = useState(false);

  // Error message (e.g. empty fields)
  const [error, setError] = useState('');

  // Update form data when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on typing
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('⚠️ Please fill in all fields before sending!');
      return;
    }

    // Email format check (basic)
    if (!formData.email.includes('@')) {
      setError('⚠️ Please enter a valid email address.');
      return;
    }

    // Success!
    setSubmitted(true);
  };

  // Reset form to send another message
  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    setError('');
  };

  // Show success screen after submission
  if (submitted) {
    return (
      <main className="contact-page">
        <div className="contact-success">
          <div className="success-icon">🎉</div>
          <h2>Message Sent!</h2>
          <p>Thanks, <strong>{formData.name}</strong>! We'll reply to <strong>{formData.email}</strong> soon.</p>
          <button className="btn-neon" onClick={handleReset}>Send Another Message</button>
        </div>
      </main>
    );
  }

  return (
    <main className="contact-page">

      {/* ── Header ── */}
      <section className="contact-hero">
        <div className="contact-badge">✉️ Get in Touch</div>
        <h1 className="contact-title">
          Contact <span className="accent-pink">Us</span>
        </h1>
        <p className="contact-sub">
          Have a question, suggestion, or feedback? We'd love to hear from you!
        </p>
      </section>

      {/* ── Two column: form + info ── */}
      <div className="contact-layout">

        {/* Left: Contact Form */}
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="field-group">
              <label htmlFor="name">👤 Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Atharva Patel"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div className="field-group">
              <label htmlFor="email">📧 Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="atharvapatel@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message Field */}
            <div className="field-group">
              <label htmlFor="message">💬 Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you think, report a bug, or ask a question..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Error message */}
            {error && <p className="form-error">{error}</p>}

            {/* Submit */}
            <button type="submit" className="btn-neon">
              🚀 Send Message
            </button>
          </form>
        </div>

        {/* Right: Info cards */}
        <div className="contact-info">
          <div className="info-card">
            <span>⏰</span>
            <div>
              <h4>Response Time</h4>
              <p>We reply within 24–48 hours</p>
            </div>
          </div>
          <div className="info-card">
            <span>🎮</span>
            <div>
              <h4>Support</h4>
              <p>Having trouble with a quiz? Tell us!</p>
            </div>
          </div>
          <div className="info-card">
            <span>💡</span>
            <div>
              <h4>Suggestions</h4>
              <p>Want a new C++ topic? Let us know!</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Contact;