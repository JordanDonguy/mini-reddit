import React, { useState } from 'react';
import styles from './Post.module.css';
import commentsLogo from '../../data/comments-logo.png';
import loadingGIF from '../../data/Loading.gif';
import Comment from '../comment/Comment';
import moment from 'moment';

const Post = (props) => {
  const timeAgo = moment.unix(props.utc).fromNow();

  const renderImgAndVideo = () => {
    const urlToCheck = props.url
    if (props.description) {
      return <p className={styles.description}>{props.description}</p>
    } else if (props.isVideo) {
      return (
        <div className={styles.container}>
          <video controls className={styles.video} >
            <source src={props.video.reddit_video.fallback_url} type="video/mp4" />
          </video>
        </div>
      )} else if (urlToCheck.includes('i.redd.it')) {
      return (
        <div className={styles.container}>
          <img src={props.url} alt='post' />
        </div>
      )} else {
        return <br></br>
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
              key={com.id}
              ups={com.ups}
              utc={com.created_utc}
              replies={com.replies}
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
        {renderImgAndVideo()}
        <div className={styles.commentsUps}>

          <button className={styles.commentsButton} onClick={handleOnClick}>
            <img src={commentsLogo} alt='comments logo' />
            <span>{props.numComments}</span>
          </button>
          <span className={styles.ups}>▲ {props.ups} ▼</span>
        </div>
        {toggleSwitch && renderComments()}
      </article>
    </div>
  )
}

export default Post