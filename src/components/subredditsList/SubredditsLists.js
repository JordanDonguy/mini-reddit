import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits, isLoadingSubreddits, failedToLoadSubreddits, loadSubreddits } from '../../app/slices/subredditsSlice';
import loadingGIF from '../../data/Loading.gif';
import Subreddit from '../subreddit/Subreddit';
import styles from './SubredditsList.module.css'

const SubredditsLists = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const isLoading = useSelector(isLoadingSubreddits);
    const failedToLoad = useSelector(failedToLoadSubreddits);

    useEffect(() => {
        dispatch(loadSubreddits())
    }, []);

    function renderSubreddits() {
        if (!isLoading && !failedToLoad) {
            return subreddits.map((subreddit) =>
                <Subreddit
                    key={subreddit.id}
                    title={subreddit.title}
                    url={subreddit.url}
                />
            )
        } else if (isLoading && !failedToLoad) {
            return (
                <div className={styles.loadingGifContainer}>
                    <img src={loadingGIF} className={styles.loadingGIF} />
                </div>
            )
        } else if (!isLoading && failedToLoad) {
            return <h1 className={styles.error}>Error loading subreddits, try again in a few minutes...</h1>
        }
    }

    return (
        <div className={styles.subredditsList}>
            {renderSubreddits()}
        </div>
    )
}

export default SubredditsLists