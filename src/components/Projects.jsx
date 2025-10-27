import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (projectId) => {
    setFlippedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 1,
      title: 'Iqra Leather',
      image: '/logo/Iqra Logo.jpg',
      description: 'Iqra leather is a leather finished goods company. It provides all type of leather goods even finished leather you can customize leather as per your will and design your product also.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://iqraleatherco.com/',
      githubUrl: 'https://github.com/afsar11797/Iqra',
      category: 'Business'
    },
    {
      id: 2,
      title: 'Tijarah International',
      image: '/logo/Tijarah.png',
      description: 'Tijarah International is a leather finished goods company offering safety and fancy gloves as well as apparel made from leather. The website showcases products and factory images.',
      technologies: ['Wordpress', 'CSS', 'JavaScript', 'HTML', 'PHP'],
      liveUrl: 'https://tijarahinternational.com/',
      githubUrl: 'https://github.com/afsar11797/Tijarah-International',
      category: 'Business'
    },
    {
      id: 3,
      title: 'Dusterzz',
      image: '/logo/logo.png', 
      description: 'It is a cleaning service company which deals in all types of cleaning from house to office to facade. You want to clean any things just call Dusterzz',
      technologies: ['JavaScript', 'React.js' , 'CSS'], 
      liveUrl: 'https://dusterzz.com',
      githubUrl: 'https://github.com/afsar11797/dusterzz',
      category: 'Business'
    }
    ,
    {
      id: 4,
      title: 'Bhikaram Chandimal',
      image: '/logo/Bikaram Chandimal.jpg',
      description: 'A popular brand holding company that makes Indian snacks, sweets, and savories. The website is designed for educational purposes to showcase traditional Indian cuisine.',
      technologies: ['HTML', 'CSS','SCSS'],
      liveUrl: 'https://bhikaramchandimal.netlify.app/',
      githubUrl: 'https://github.com/afsar11797/Bhikaram-Chandimal',
      category: 'Food & Beverage'
    },
    {
      id: 5,
      title: 'Geetanjali Club',
      image: '/logo/Geetanjali.png',
      description: 'A club focused on different styles of art teaching, formerly dance and instrumental. The website is designed with responsive coding for smaller screens.',
      technologies: ['HTML', 'CSS','SCSS'],
      liveUrl: 'https://geetanjaliclub.netlify.app/',
      githubUrl: 'https://github.com/afsar11797/Geetanjali-club',
      category: 'Education'
    },
    {
      id: 6,
      title: 'National Hardware',
      image: '/logo/National Hardware.png',
      description: 'An e-commerce website for a hardware shop showcasing different hardware items. It does;nt matter where you are stuck just vist National hardware and get your desired tool in your door step within few minutes.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: 'https://nationalhardwaremart.netlify.app/',
      githubUrl: 'https://github.com/afsar11797/National-harware',
      category: 'E-commerce'
    },
    {
      id: 7,
      title: 'The Royal Hotel',
      image: '/logo/royalhotel.png',
      description: 'An international hotel booking website if you are travelling just log in to the website and book a scenic view room where you will forget your worries away.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL', 'SCSS'],
      liveUrl: 'https://the-royal-hotel.netlify.app/',
      githubUrl: 'https://github.com/afsar11797/Royal-Hotel',
      category: 'Hospitality'
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
    hidden: { y: 50, opacity: 0 },
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
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className={`flip-card ${flippedCards[project.id] ? 'flipped' : ''}`}
                onClick={() => toggleFlip(project.id)}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div className="project-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-img"
                      />
                      <div className="project-overlay">
                        <span className="project-category">{project.category}</span>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-tech">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flip-hint">
                      <span>Click to see details</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="project-details">
                      <h3 className="project-title-back">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-tech-back">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag-back">{tech}</span>
                        ))}
                      </div>

                      <div className="project-links">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link live"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="link-icon" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link github"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="link-icon" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="projects-note">
            Each project represents my dedication to creating user-friendly, responsive, 
            and visually appealing web applications
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
