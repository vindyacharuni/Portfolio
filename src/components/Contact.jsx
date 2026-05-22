import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import emailjs from '@emailjs/browser'; // 1. Import EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false); // 2. Add loading state
    const revealRef = useScrollReveal();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('');

        if (validateForm()) {
            setIsSending(true);

            // 3. Map your React state to the variables in your EmailJS template
            const templateParams = {
                user_name: formData.name,
                user_email: formData.email,
                message: formData.message,
            };

            // 4. Send the email
            emailjs.send(
                'service_og0cl1b',   // Replace with your actual Service ID
                'template_dkt68tp',  // Replace with your actual Template ID
                templateParams,
                'g0f8H2IxaiY-Le_zh'    // Replace with your actual Public Key
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' }); // Clear form
                setErrors({});
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setStatus('Failed to send the message. Please try again later.');
            })
            .finally(() => {
                setIsSending(false); // Re-enable the button
            });
        }
    };

    return (
        <section id="contact" className="contact-section reveal" ref={revealRef}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        className={errors.message ? 'input-error' : ''}
                    />
                    {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                {/* 5. Update button to show loading state */}
                <button type="submit" className="btn-primary" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {status && (
                    <p className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
};

export default Contact;