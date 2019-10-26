// @flow
import React from 'react';
import { WifiOff } from 'react-feather';

import { RequestType } from '../types';
// import RequestDetails from './RequestDetails';
import styles from './RequestList.css';

type RequestListPropsType = {
  requests: RequestType[]
};

// function useSelectedRequest() {
//   const [selectedRequest, setSelectedRequest] = useState(null);

//   return {
//     selectedRequest,
//     toggleRequest: req =>
//       setSelectedRequest(req === selectedRequest ? null : req)
//   };
// }

function RequestList({ requests }: RequestListPropsType) {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {requests && requests.length > 0 ? (
          requests.map((request, index) => (
            <button
              type="button"
              className={index % 2 === 0 ? styles.alternate : styles.row}
              key={request + index}
            >
              <div className={styles.success} />
              <div className={styles.text}>{request.url}</div>
            </button>
          ))
        ) : (
          <div className={styles.offline}>
            <WifiOff color="#3b3f46" size="50" />
            <div className={styles.text}>
              Welcome to OProxy! To initiate proxy, please press the start
              button.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestList;
