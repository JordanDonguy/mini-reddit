import React, { useState } from 'react';
import styles from './Comment.module.css';
import moment from 'moment';
import Reply from '../reply/Reply';
import loadingGIF from '../../data/Loading.gif';

const Comment = (props) => {
    const timeAgo = moment.unix(props.utc).fromNow();
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [replies, setReplies] = useState();

    function handleOnClick() {
        if (!toggleSwitch) {
            setToggleSwitch(true);
            setReplies(props.replies)
        } else {
            setToggleSwitch(false)
        }
    };

    function renderReplies() {
        if (replies) {
            return (
                <div className={styles.replies}>
                    {props.replies.data.children.map((reply) =>
                        <Reply
                            author={reply.data.author}
                            description={reply.data.body}
                            utc={reply.data.created_utc}
                            key={reply.data.id}
                        />)}
                </div>
            )
        } else {
            return (
                <div className={styles.loadingGifContainer}>
                    <img src={loadingGIF} alt='loadingGIF' className={styles.loadingGIF} />
                </div>
            )
        }
    };

    function renderButton() {
        if (props.replies) {
            const repliesArray = props.replies.data.children;
            return (
                <div>
                    <button onClick={handleOnClick} className={styles.repliesButton}>+</button>
                    <span className={styles.repliesAmount}>{repliesArray.length} more answers</span>
                </div>
            )
        }
    };

    const timeAgoValid = timeAgo !== 'Invalid date'

    function renderTimeAgo() {
        if (timeAgoValid) {
            return (
                <div>
                    <span>-</span>
                    <span className={styles.timeAgo}>{timeAgo}</span>
                </div>
            )
        }
    };

    function renderComments() {
        return (
            <div className={styles.comment}>
                <div className={styles.author}>
                    <img
                        src={`https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png`}
                        alt={`Avatar`}
                        className={styles.avatar}
                    />
                    <h3 className={styles.name}>{props.author}</h3>
                    {renderTimeAgo()}
                </div>
                <p>{props.body}</p>
                <span className={styles.ups}>▲ {props.ups} ▼</span>
                {renderButton()}
                {toggleSwitch && renderReplies()}
            </div>
        )
    }

    return (
        <div>
            {timeAgoValid && renderComments()}
        </div>
  )
}

export default Comment