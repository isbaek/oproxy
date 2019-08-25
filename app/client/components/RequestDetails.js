// @flow
import React from 'react';
import {RequestType} from '../types';
import styles from './RequestList.css';

type RequestDetailsPropsType = {
  selectedRequest: RequestType,
};

function RequestDetails({ selectedRequest }: RequestDetailsPropsType) {
  return (
    <div className={styles.container}>
      {JSON.stringify(selectedRequest)}
    </div>
  );
}

export default RequestDetails;
