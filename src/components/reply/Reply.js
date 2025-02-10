import React from 'react';
import styles from './Reply.module.css';
import moment from 'moment';

const Reply = (props) => {
    const timeAgo = moment.unix(props.utc).fromNow();

    function renderTimeAgo() {
        if (timeAgo !== 'Invalid date') {
            return <span>- {timeAgo}</span>
        }
    }

    function renderImg() {
        if (timeAgo !== 'Invalid date') {
            return (
            <img
              src={`https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png`}
              alt={`Avatar`}
              className={styles.avatar}
            />
            )
        }
    }

  return (
    <div className={styles.reply}>
        <div className={styles.author}>
            {renderImg()}
            <h3>{props.author}</h3>
            {renderTimeAgo()}
        </div>
        <p>{props.description}</p>
    </div>
  )
}

export default Reply