// @flow
import React from 'react';
import styles from './Header.css';

function Header ({ onClick, isListening }) {
  return (
    <div className={styles.container}>
      <h2>OProxy</h2>
      <div>
      <button className={styles.button} onClick={onClick}>
        {isListening ? 'Stop' : 'Start'}
      </button>
      </div>
    </div>
  )
}

export default Header;
