import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../style/InquiryPage.css';

const InquiryPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productName = queryParams.get('product') || '';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        product: productName,
    });

    const [status, setStatus] = useState(null);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            product: productName,
        }));
    }, [productName]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.message) {
            setStatus({ success: false, message: 'Please fill in all fields.' });
            return;
        }

        emailjs.send(
            'service_yd7u20f', // Replace with your EmailJS service ID
            'template_3pifkdq', // Replace with your EmailJS template ID
            formData,
            'sES4oDz7LtHCocvwe' // Replace with your EmailJS user ID (public key)
        ).then(
            (response) => {
                setStatus({ success: true, message: 'Inquiry sent successfully! Redirecting...' });
                console.log('SUCCESS!', response.status, response.text);

                setTimeout(() => {
                    window.location.href = 'https://autowelt.netlify.app/products'; // Redirect to product page after 1.5 seconds
                }, 1500);

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                    product: productName, // Keep the product name after reset
                });
            },
            (error) => {
                setStatus({ success: false, message: 'Failed to send inquiry. Please try again.' });
                console.log('FAILED...', error);
            }
        );
    };

    return (
        <div className="inquiry-page">
            <h2>Product Inquiry</h2>
            {status && (
                <p className={`status-message ${status.success ? 'success' : 'error'}`}>
                    {status.message}
                </p>
            )}
            <form className="inquiry-form" onSubmit={sendEmail}>
                <label>Product Name:</label>
                <input type="text" name="product" value={formData.product} readOnly />

                <label>Your Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Your Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone Number:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

                <label>Company Name:</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />

                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />

                <button type="submit" className="submit-btn">Send Inquiry</button>
            </form>
        </div>
    );
};

export default InquiryPage;
