import React from 'react'; 
import { motion } from 'framer-motion'; // Importing motion
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importing icons
import InteractiveCanvas from './InteractiveCanvas'; 

const HeroSection = () => {
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

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <InteractiveCanvas />
      <div id="home" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '.8rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgb(0 1 237)' }}>Hi, I'm Md Arsalan Afsar</h1>
        <p style={{ fontSize: '4.5rem', textShadow: 'rgb(19 178 197) 1px 1px 2px' }}>Building Websites</p>
        <p style={{ fontSize: '4.5rem', textShadow: '1px 1px 2px rgb(19 178 197)' }}>Finance Manager & </p>
        <p style={{ fontSize: '4.5rem', textShadow: '1px 1px 2px rgb(19 178 197)' }}>Analyst</p>
        <p style={{ fontSize: '1rem', color:'black', textShadow: '1px 1px 2px rgb(255 0 0 / 50%)' }}>I am a front-end developer by passion and a lot more by hobbies.</p>
        <div className="social-links" style={{ marginTop: '20px' }}>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', margin: '0 10px', '--social-color': social.color }}
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
