// @flow
import React, { useState } from 'react';
import { RequestType } from '../types';
import RequestDetails from './RequestDetails';
import styles from './RequestList.css';

type RequestListPropsType = {
  requests: RequestType[]
};

function useSelectedRequest() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  return {
    selectedRequest,
    toggleRequest: req =>
      setSelectedRequest(req === selectedRequest ? null : req)
  };
}

function RequestList({ requests }: RequestListPropsType) {
  const { selectedRequest, toggleRequest } = useSelectedRequest();
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {requests.map((request, index) => (
          <button
            type="button"
            className={index % 2 === 0 ? styles.alternate : styles.row}
            key={request + index}
            onClick={() => toggleRequest(request)}
          >
            <div className={styles.success} />
            <div className={styles.text}>{request.url}</div>
          </button>
        ))}
      </div>
      {selectedRequest && <RequestDetails selectedRequest={selectedRequest} />}
    </div>
  );
}

export default RequestList;
