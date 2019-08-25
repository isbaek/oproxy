// @flow
import React, {useState} from 'react';
import {RequestType} from '../types';
import RequestDetails from './RequestDetails';
import styles from './RequestList.css';

type RequestListPropsType = {
  requests: RequestType[],
  isSelected?: boolean
};

function RequestList({ requests, isSelected }: RequestListPropsType) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  return (
    <div className={styles.container}>
      {requests.map((request, index) => (
        <button
          className={index % 2 === 0 ? styles.alternate : styles.row}
          key={request + index}
          onClick={() => setSelectedRequest(request)}
        >
          <div className={styles.success} />
          <div className={styles.text}>{request.url}</div>
        </button>
      ))}
      {selectedRequest && <RequestDetails selectedRequest={selectedRequest} />}
    </div>
  );
}

export default RequestList;
