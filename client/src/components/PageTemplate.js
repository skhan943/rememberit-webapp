import React from 'react';
import styles from './PageTemplate.module.css';

const PageTemplate = (props) => {
    return(
        <div className={styles.mainContainer}>
            <div className={styles.leftSideBar}>
                {props.leftBarContent}
            </div>
            <div className={styles.rightSideBar}>
                {props.rightBarContent}
            </div>
            <div className={styles.titleBar}>
                <h1>RememberIt</h1>
            </div>
            <div className={styles.middleArea}>
                {props.middleContent}
            </div>
        </div>
    )
}

export default PageTemplate;