import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import redditLogo from '../data/reddit-logo.png';
import Searchbar from '../components/searchbar/Searchbar';
import PostsList from '../components/postsList/PostsList';
import SubredditsLists from '../components/subredditsList/SubredditsLists';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function renderSubredditsList() {
    if (windowWidth >= 900) {
      return <SubredditsLists />
    }
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    };
    window.addEventListener('resize', handleResize)
    handleResize();
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  function handleOnClick() {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={redditLogo} className={styles.redditLogo} onClick={handleOnClick} alt='reddit logo' />
          <h1>Mini Reddit</h1>
        </div>
        <div className={styles.searchbar}>
          <Searchbar />
        </div>
      </header>
      <div className={styles.main}>
        {renderSubredditsList()}
        <PostsList />
      </div>
    </div>
  );
}

export default App;
