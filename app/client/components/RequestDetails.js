// @flow
import React from 'react';
import { RequestType } from '../types';
import styles from './RequestDetails.css';

type RequestDetailsPropsType = {
  selectedRequest: RequestType
};

function RequestDetails({ selectedRequest }: RequestDetailsPropsType) {
  const headers = Object.keys(selectedRequest.headers);

  return (
    <div className={styles.container}>
      <button type="button" className={styles.tab}>
        Headers
      </button>
      {headers.map(header => (
        <div key={header}>
          <span className={styles.key}>{header}</span>:
          <span className={styles.value}>
            {` ${selectedRequest.headers[header]}`}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RequestDetails;
