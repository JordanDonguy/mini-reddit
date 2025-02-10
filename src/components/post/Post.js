import React, { useState } from 'react';
import styles from './Post.module.css';
import commentsLogo from '../../data/comments-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import loadingGIF from '../../data/Loading.gif';
import Comment from '../comment/Comment';
import moment from 'moment';

const Post = (props) => {
  const dispatch = useDispatch();
  const timeAgo = moment.unix(props.utc).fromNow();

  const renderImg = () => {
    if (props.description) {
      return <p className={styles.description}>{props.description}</p>
    } else {
      return <img src={props.url} alt='' className={styles.description} />
    }
  }
  const renderVideo = () => {
    if (props.isVideo) {
      return <video controls className={styles.video} >
        <source src={props.video.reddit_video.scrubber_media_url} type="video/mp4" />
      </video>
    }
  }

  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [comment, setComment] = useState();

  async function fetchComments() {
    const API_ROOT = 'https://www.reddit.com';
    const response = await fetch(`${API_ROOT}${props.permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((comment) => comment.data);
  }

  function handleOnClick() {
    if (!toggleSwitch) {
      setToggleSwitch(true)
      fetchComments().then(function (result) {
        setComment(result);
      })
    } else {
      setToggleSwitch(false)
    }
  }

  function renderComments() {
    if (!comment) {
      return <div className={styles.loadingGifContainer}><img src={loadingGIF} alt='loadingGIF' className={styles.loadingGIF} /></div>
    } else {
      return (
        <div className={styles.comments}>
          <h3>Comments :</h3>
          {comment.map((com) =>
            <Comment
              body={com.body}
              author={com.author}
              id={com.id}
              key = {com.id}
              ups={com.ups}
              utc={com.created_utc}
            />
          )}
        </div>
      )
    }
  }

  return (
    <div key={props.id}>
      <article key={props.id} className={styles.post}>
        <h4>r/{props.subreddit}</h4>
        <div className={styles.author}>
          <h3>{props.author}</h3>
          <span>- {timeAgo}</span>
        </div>
        <h1>{props.title}</h1>
        {renderImg()}
        {renderVideo()}
        <div className={styles.commentsUps}>
          <span className={styles.ups}>▲ {props.ups} ▼</span>
          <button className={styles.commentsButton} onClick={handleOnClick}>
            <img src={commentsLogo} />
            <span>{props.numComments}</span>
          </button>
        </div>
        {toggleSwitch && renderComments()}
      </article>
    </div>
  )
}

export default Post