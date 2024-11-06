import React, { useState } from 'react';
import '../assets/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Construct the mailto link
        const mailtoLink = `mailto:your-email@example.com?subject=Contact from ${name}&body=Name: ${name}%0DEmail: ${email}%0D%0DMessage:%0D${encodeURIComponent(message)}`;

        // Open the mailto link
        window.location.href = mailtoLink;
    };

    return (
        <section className="form-container" id="contact">
            <h2 className="text-7xl section__title">Let's Chat!</h2>
            <form onSubmit={handleSubmit} className="form">
            <p className="text-left mb-2 w-full">Got a question or just want to say hi? Fill out the form below, and I’ll get back to you soon! </p>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="8"
                    className="textarea"
                />
                <button type="submit" className="button-submit text-xl flex gap-4 items-end justify-end main-btn">Send<svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                >
                <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
                />
                </svg></button>
            </form>
        </section>
    );
};
export default Contact
