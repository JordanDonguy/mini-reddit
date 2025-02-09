import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
const renderImg = () => {
  if (props.description) {
    return <p>{props.description}</p>
  } else {
    return <img src={props.url} alt='' />
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
          {/* <img className={styles.img} src={props.url} onerror={styles.img='none'} alt={props.url}/>
          <p>{props.description}</p> */}
          {renderImg()}
          {renderVideo()}
        </article>
    </div>
  )
}

export default Post