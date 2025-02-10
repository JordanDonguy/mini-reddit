import React from 'react';
import styles from './Comment.module.css';
import moment from 'moment';

const Comment = (props) => {
    const timeAgo = moment.unix(props.utc).fromNow();

  return (
    <div key={props.id} className={styles.comment}>
        <div className={styles.author}>
            <img
              src={`https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png`}
              alt={`Avatar`}
              className={styles.avatar}
            />
            <h3 className={styles.name}>{props.author}</h3>
            <span>- {timeAgo}</span>
        </div>
        <p>{props.body}</p>
        <span>▲ {props.ups} ▼</span>
    </div>
  )
}

export default Comment