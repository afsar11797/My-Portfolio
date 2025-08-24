import React from 'react';
import InteractiveCanvas from './InteractiveCanvas'; // Importing the canvas for the background

const HeroSection = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <InteractiveCanvas />
      <div id="home" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Hi, I'm Md Arsalan Afsar</h1>
        <p style={{ fontSize: '4.5rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Building Websites</p>
        <p style={{ fontSize: '4.5rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Finance Manager & </p>
        <p style={{ fontSize: '4.5rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Analyst</p>
        <p style={{ fontSize: '1rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>I am a front-end developer by passion and a lot more by hobbies.</p>
        <div className="social-links" style={{ marginTop: '20px' }}>
          <a href="https://github.com/afsar11797" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}><i className="fagithub"></i></a>
          <a href="https://www.linkedin.com/in/md-arsalan-afsar-b52b73237/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}><i className="falinkedin"></i></a>
          <a href="https://www.instagram.com/_md_afsar_1197/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}><i className="fainstagram"></i></a>
          <a href="https://www.facebook.com/arsalan.afsar.18" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}><i className="fafacebook"></i></a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
