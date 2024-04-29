import React, { useState, useEffect } from 'react';
import Header from '../components/ui-comps/Header';
import Section from '../components/ui-comps/Section';
import '../App1.css';

import VidBackground from './VidBackground';

const HomePage: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // setIsSticky(!isSticky);
    // window.scrollTo(0,0)

  };

  return (
    <div className={`App ${isMenuOpen ? 'stop' : ''}`}>
      <Header isSticky={isSticky} openMenu={openMenu} />
      <></>
      {/* <VideoBackground/>
       */}
       <VidBackground/>
      <div id="page" className={isMenuOpen ? 'menuopen' : ''}>
        <Section id="vision" backgroundImage="https://assets.codepen.io/214624/vision.jpg" title="Vision" />
      <Section id="knowledge" backgroundImage="https://assets.codepen.io/214624/knowledge.jpg" title="Knowledge" />
      <Section id="space" backgroundImage="https://assets.codepen.io/214624/space.jpg" title="Space" />
      <Section id="future" backgroundImage="https://assets.codepen.io/214624/future.jpg" title="Future" />
      
      </div>
      
    </div>
  );
}

export default HomePage;
