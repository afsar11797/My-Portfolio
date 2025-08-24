import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaFacebook 
} from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      label: '+91 7278160687',
      href: 'tel:+917278160687'
    },
    {
      icon: FaEnvelope,
      label: 'arsalanafsar11797@gmail.com',
      href: 'mailto:arsalanafsar11797@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Kolkata, India',
      href: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Information */}
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-content">
              <h3 className="info-title">Get in Touch</h3>
              <p className="info-description">
                I'm always excited to take on new challenges and collaborate on 
                innovative projects. Whether you have a question or want to discuss 
                a potential project, feel free to reach out!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="contact-detail"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <info.icon className="detail-icon" />
                    <span className="detail-text">{info.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="social-links-contact">
                <a
                  href="https://www.linkedin.com/in/md-arsalan-afsar-b52b73237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-contact"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/afsar11797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-contact"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/_md_afsar_1197/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-contact"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/arsalan.afsar.18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-contact"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form-container" variants={itemVariants}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send me a message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="form-textarea"
                  maxLength="500"
                />
                <div className="char-count">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    <FaPaperPlane className="submit-icon" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
