// src/components/TopNavBar/TopNavBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TopNavBar.module.css';

const TopNavBar = () => {
  const navigate  = useNavigate();

  const navigateTo = (path) => {
    navigate (path);
  };

  return (
    <div className={styles.topNavBar}>
      <input type="text" placeholder="Search..." className={styles.searchBar} />
      <button onClick={() => console.log('Search button clicked!')} className={styles.searchButton}>
        Search
      </button>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#home" onClick={() => navigateTo('/')} className={styles.navLink}>Home</a></li>
          <li><a href="#rickroll" onClick={() => navigateTo('/rickroll')} className={styles.navLink}>RickRoll</a></li>
          <li><a href="#nyancat" onClick={() => navigateTo('/nyancat')} className={styles.navLink}>NyanCat</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNavBar;
