import React from 'react';
import styles from './Subreddit.module.css';
import { useDispatch } from 'react-redux';
import { loadingPosts } from '../../app/slices/postsSlice';


const Subreddit = (props) => {
    const dispatch = useDispatch();

    function handleOnClick() {
        const subreddit = props.url
        dispatch(loadingPosts(`${subreddit}`))
        console.log(`${subreddit}`)
    }

  return (
    <div className={styles.subreddit}>
        <button onClick={handleOnClick}>r/{props.title}</button>
    </div>
  )
}

export default Subreddit