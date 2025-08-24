import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Importing the new hero section component
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
