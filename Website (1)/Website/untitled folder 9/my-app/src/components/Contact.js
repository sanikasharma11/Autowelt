import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_yd7u20f', // Replace with your EmailJS Service ID
        'template_axgnn3k', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'sES4oDz7LtHCocvwe' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setFormSubmitted(true);
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  };

  return (
    <div className="contact-page">
      <h1 className="heading">Get in Touch with Us</h1>
      <p className="intro-text">We value your business. Reach out to us for inquiries, partnerships, or support.</p>

      <div className="contact-details">
        <p className="detail-item"><strong>Email:</strong> autowelt.infoserv@gmail.com</p>
        <p className="detail-item"><strong>Phone:</strong> +91 91377 25853</p>
        <p className="detail-item"><strong>Office:</strong> Mumbai, Maharashtra, India</p>
      </div>

      <h2 className="subheading">Send Us a Business Inquiry</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Full Name" className="form-input" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Business Email" className="form-input" required onChange={handleChange} />
        <select name="subject" className="form-select" required onChange={handleChange}>
          <option value="" disabled selected>Choose a Subject</option>
          <option value="business-inquiry">Business Inquiry</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="customer-support">Customer Support</option>
        </select>
        <textarea name="message" placeholder="Your Message (Include relevant details)" className="form-textarea" rows="5" required onChange={handleChange}></textarea>
        <button type="submit" className="form-button">Submit Inquiry</button>
      </form>

      {formSubmitted && (
        <div className="confirmation-message">
          <h3>Thank you for reaching out!</h3>
          <p>Our team will review your inquiry and get back to you shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
