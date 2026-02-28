import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Show only on first visit for this session
    return !sessionStorage.getItem('introShown');
  });

  const audioConfig = {
    enabled: true,
    autoplay: true,
    volume: 0.7,
    continueInPortfolio: false, // Stop after intro
    allowUserToggle: true,
    respectSystemMute: true
  };

  const handleIntroComplete = () => {
    sessionStorage.setItem('introShown', 'true');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={handleIntroComplete} audioConfig={audioConfig} />
      ) : (
        <div className="app">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
