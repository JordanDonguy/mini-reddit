import React from 'react';
import styles from './Post.module.css';
import commentsLogo from '../../data/comments-logo.png';

const Post = (props) => {
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

  return (
    <div key={props.id}>
        <article key={props.id} className={styles.post}>
          <h3>{props.author}</h3>
          <h1>{props.title}</h1>
          {renderImg()}
          {renderVideo()}
          <div className={styles.commentsUps}>
          <span className={styles.ups}>▲ {props.ups} ▼</span>
          <button className={styles.comments}>
            <img src={commentsLogo} />
            <span>{props.numComments}</span>
          </button>
          </div>
        </article>
    </div>
  )
}

export default Post