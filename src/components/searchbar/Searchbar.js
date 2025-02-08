import React, {useState} from 'react';
import styles from './Searchbar.module.css';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleOnChange(e) {
        setSearchTerm(e.currentTarget.value)
    }

  return (
    <div className={styles.searchbar}>
        <button className={styles.button}></button>
        <input
        type='text'
        value={searchTerm}
        className={styles.search}
        onChange={handleOnChange}
        placeholder='Search...'
        />
    </div>
  )
};

export default Searchbar