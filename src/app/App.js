import React from 'react';
import styles from './App.module.css';
import redditLogo from '../data/reddit-logo.png';
import Searchbar from '../components/searchbar/Searchbar';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={redditLogo} className={styles.redditLogo} />
          <h1>Mini Reddit</h1>
        </div>
        <div className={styles.searchbar}>
          <Searchbar />
        </div>
      </header>
    </div>
  );
}

export default App;
