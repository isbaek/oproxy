// @flow
import React from 'react';
import styles from './Footer.css';

type HeaderPropsType = {
  isListening: boolean,
  port: number,
  ip: number
};

function Footer({ isListening, port, ip }: HeaderPropsType) {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={isListening ? styles.online : styles.offline} />
        <div className={styles.text}>
          {isListening ? `Listening on ${port}` : `Offline`}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.alternate}>{ip}</div>
      </div>
    </div>
  );
}

export default Footer;
