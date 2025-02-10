import React, {useEffect} from 'react';
import styles from './PostsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { failedToLoadPosts, isLoadingPosts, selectPosts } from '../../app/slices/postsSlice';
import Post from '../post/Post';
import { loadingPosts } from '../../app/slices/postsSlice';
import loadingGIF from '../../data/Loading.gif';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log(posts);
  const isLoading = useSelector(isLoadingPosts);
  const failedToLoad = useSelector(failedToLoadPosts);

  useEffect(() => {
    dispatch(loadingPosts('popular'))
  }, []);

  function renderPosts() {
    if (!isLoading && !failedToLoad) {
      return posts.map((post) => 
        <Post 
        id = {post.id}
        title = {post.title}
        subreddit={post.subreddit}
        author = {post.author}
        url = {post.url}
        numComments = {post.num_comments}
        ups = {post.ups}
        description = {post.selftext}
        video= {post.media}
        isVideo={post.is_video}
        permalink={post.permalink}
        utc={post.created_utc}
        />
        )
    } else if (isLoading && !failedToLoad) {
      return (
        <div className={styles.loadingGifContainer}>
          <img src={loadingGIF} className={styles.loadingGIF}/>
        </div>
      )
    } else if (!isLoading && failedToLoad) {
      return <h1>Error loading posts, try again in a few minutes</h1>
    }
  }

  return (
    <div className={styles.postsList}>
      {renderPosts()}
    </div>
  )
}

export default PostsList