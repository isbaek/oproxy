// @flow
import React from 'react';
import styles from './Header.css';

type HeaderPropsType = {
  onClick: () => void,
  isListening: boolean,
  port: number,
  onPortChange: (port: number) => void
};

function Header({ onClick, isListening, port, onPortChange }: HeaderPropsType) {
  return (
    <div className={styles.container}>
      <h2>OProxy</h2>
      <div>
        {isListening ? `Proxy started on ` : ''}
        <input
          type="text"
          placeholder="8888"
          value={port}
          onChange={e => onPortChange(e.target.value)}
        />
        <button type="button" className={styles.button} onClick={onClick}>
          {isListening ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
}

export default Header;
