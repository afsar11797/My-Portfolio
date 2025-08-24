import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: 'React JS',
      image: '/logo/React_(web_framework)-Logo.wine.png',
      level: 90,
      color: '#61DAFB'
    },
    {
      name: 'Node JS',
      image: '/logo/Node.js-Logo.wine.png',
      level: 85,
      color: '#339933'
    },
    {
      name: 'HTML',
      image: '/logo/icons8-html-480.png',
      level: 95,
      color: '#E34F26'
    },
    {
      name: 'CSS',
      image: '/logo/icons8-css-240.png',
      level: 90,
      color: '#1572B6'
    },
    {
      name: 'JavaScript',
      image: '/logo/icons8-javascript-240.png',
      level: 88,
      color: '#F7DF1E'
    },
    {
      name: 'Java',
      image: '/logo/Java_(programming_language)-Logo.wine.png',
      level: 80,
      color: '#007396'
    },
    {
      name: 'GitHub',
      image: '/logo/GitHub-Logo.wine.png',
      level: 85,
      color: '#181717'
    },
    {
      name: 'MySQL',
      image: '/logo/MySQL-Logo.wine.png',
      level: 82,
      color: '#4479A1'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">
            Here are the technologies I work with to create amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="skill-image">
                <img 
                  src={skill.image} 
                  alt={skill.name}
                  className="skill-img"
                />
              </div>
              
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                
                <div className="skill-progress">
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      style={{ backgroundColor: skill.color }}
                      variants={progressVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    />
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-level">
                  <div className="level-dots">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`level-dot ${dot <= Math.ceil(skill.level / 20) ? 'active' : ''}`}
                        style={{ backgroundColor: dot <= Math.ceil(skill.level / 20) ? skill.color : '#e5e7eb' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="skills-note">
            Continuously learning and expanding my skill set with new technologies and frameworks
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
