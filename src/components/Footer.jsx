import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaCopyright } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/md-arsalan-afsar-b52b73237/",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: FaGithub,
      href: "https://github.com/afsar11797",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_md_afsar_1197/",
      label: "Instagram",
      color: "#E4405F"
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/arsalan.afsar.18",
      label: "Facebook",
      color: "#1877F2"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" ref={ref}>
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Copyright Section */}
          <div className="footer-copyright">
            <motion.div
              className="copyright-text"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaCopyright className="copyright-icon" />
              <span>{currentYear} All Rights Reserved</span>
            </motion.div>
            <motion.div
              className="developer-credit"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Designed & Developed by <strong>Md Arsalan Afsar</strong>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.label}
                style={{ '--social-color': social.color }}
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="footer-social-icon" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            aria-label="Back to top"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="footer-note">
            Built with React.js and lots of ☕️ | Passionate about creating amazing web experiences
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
