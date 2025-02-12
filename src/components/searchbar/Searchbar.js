import React, {useState} from 'react';
import styles from './Searchbar.module.css';
import { useDispatch } from 'react-redux';
import { loadingPosts } from '../../app/slices/postsSlice';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    function handleOnChange(e) {
        setSearchTerm(e.currentTarget.value)
    }

    function handleOnClick() {
      if (searchTerm) {
        dispatch(loadingPosts(`/r/${searchTerm}`))
      } else {
        dispatch(loadingPosts('/r/popular'))
      }
    }

    function enter(event) {
      if (event.key === "Enter") {
        handleOnClick()
      }
    };

  return (
    <div className={styles.searchbar}>
        <button className={styles.button} onClick={handleOnClick}></button>
        <input
        type='text'
        value={searchTerm}
        className={styles.search}
        onChange={handleOnChange}
        onKeyDown={enter}
        placeholder='Search...'
        />
    </div>
  )
};

export default Searchbar