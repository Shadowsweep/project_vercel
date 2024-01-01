import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css'; // Adjust path if not using CSS Modules
import Navbar from './Navbar';

const Dembar = () => {
    console.log("hello")
  const [sticky, setSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.pageYOffset > navbarRef.current.offsetTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${sticky && styles.sticky}`} ref={navbarRef}>
      <Navbar />
    </nav>
  );
};

export default Dembar;
