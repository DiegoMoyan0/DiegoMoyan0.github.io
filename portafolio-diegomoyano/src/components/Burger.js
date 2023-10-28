import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import '../static/css/burger.css'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div ref={node} className="burger-menu-container">
      <div className="burger-icon" onClick={handleToggle}>
        {isOpen ? (
          <div className="icon-container">
            <a href="#home">
              <FaHome className='icon' />
            </a>
            <a href="#about">
              <FaUser className='icon' />
            </a>
            <a href="#project">
              <FaProjectDiagram className='icon' />
            </a>
            <a href="#contact">
              <FaEnvelope className='icon' />
            </a>
          </div>
        ) : (
          <GiHamburgerMenu className='icon' />
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
