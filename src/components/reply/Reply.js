import React from 'react';
import styles from './Reply.module.css';
import moment from 'moment';

const Reply = (props) => {
    const timeAgo = moment.unix(props.utc).fromNow();

    function renderTimeAgo() {
        if (timeAgo !== 'Invalid date') {
            return (
            <div>
                <span>-</span>
                <span>{timeAgo}</span>
            </div>
        )}
    }

    function renderImg() {
            return (
            <img
              src={`https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png`}
              alt={`Avatar`}
              className={styles.avatar}
            />
            )
    }

    function answerDeleted() {
        if (timeAgo === 'Invalid date') {
            return <span>Answer deleted</span>
        }
    }

  return (
    <div className={styles.reply}>
        <div className={styles.author}>
            {renderImg()}
            {answerDeleted()}
            <h3>{props.author}</h3>
            {renderTimeAgo()}
        </div>
        <p>{props.description}</p>
    </div>
  )
}

export default Reply