import React, {useEffect} from 'react';
import styles from './PostsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts } from '../../app/slices/postsSlice';
import Post from '../post/Post';
import { loadingPosts } from '../../app/slices/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log(posts);

  useEffect(() => {
    dispatch(loadingPosts('popular'))
  }, []);

  return (
    <div className={styles.postsList}>
      {posts.map((post) => 
      <Post 
      id = {post.id}
      title = {post.title}
      author = {post.author}
      url = {post.url}
      numComments = {post.num_comments}
      ups = {post.ups}
      description = {post.selftext}
      video= {post.media}
      isVideo={post.is_video}
      />
      )}
    </div>
  )
}

export default PostsList