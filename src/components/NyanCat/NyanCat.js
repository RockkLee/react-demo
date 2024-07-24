// src/components/NyanCat/NyanCat.js
import React from 'react';
import styles from './NyanCat.module.css';
import nyanCatGif from './nyancat.gif';

const NyanCat = () => {
  return (
    <div className={styles.container}>
      <img src={nyanCatGif} alt="Nyan Cat" className={styles.gif} />
    </div>
  );
};

export default NyanCat;
