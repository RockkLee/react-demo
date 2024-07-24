// src/components/RickRoll/RickRoll.js
import React from 'react';
import styles from './RickRoll.module.css';
import rickGif from './rick.gif';

const RickRoll = () => {
  return (
    <div className={styles.container}>
      <img src={rickGif} alt="Dancing Rick" className={styles.gif} />
    </div>
  );
};

export default RickRoll;
