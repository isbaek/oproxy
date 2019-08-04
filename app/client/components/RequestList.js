// @flow
import React from 'react';
import styles from './RequestList.css';

type RequestListPropsType = {
  requests: Object[],
}

function RequestList ({ requests, isSelected } : RequestListPropsType) {
  return (
    <div className={styles.container}>
      {requests.map((request, index)=> (
        <div className={index % 2 === 0 ? styles.alternate : styles.row} key={index}>
          <div className={styles.success} />
          <div className={styles.text}>{request.url}</div>
        </div>
      ))}
    </div>
  )
}

export default RequestList;
