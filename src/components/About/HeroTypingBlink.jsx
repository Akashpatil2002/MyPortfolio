import React, { useState, useEffect } from 'react';
import './HeroTyping.css';

const professions = [
  'Computer Science Student & Developer',
  'Fullstack Java Developer',
  'SQL Developer',
  'Frontend Developer',
];

const HeroTypingBlink = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade-out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % professions.length); // Change text
        setIsVisible(true); // Start fade-in
      }, 500); // Duration must match CSS
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      <span className={`fade-text text-[#800020] ${!isVisible ? 'hidden' : ''}`}>
        {professions[index]}
      </span>
    </>
  );
};

export default HeroTypingBlink;
