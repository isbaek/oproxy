// @flow
import React from 'react';
import styles from './Header.css';

type HeaderPropsType = {
  onClick: () => void,
  isListening: boolean,
  port: number
};

function Header({ onClick, isListening, port }: HeaderPropsType) {
  return (
    <div className={styles.container}>
      <h2>OProxy</h2>
      <div>
        {isListening ? `Proxy started on ${port}...` : ''}
        <button type="button" className={styles.button} onClick={onClick}>
          {isListening ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
}

export default Header;
