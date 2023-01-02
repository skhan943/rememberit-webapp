import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MemoryCard.module.css';
import '../App.css';

const MemoryCard = (props) => {

    let memory = props.memory;

    return (
        <Link to={`/${memory._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <h2>{memory.title}</h2>
                </div>
                <div className={styles.dateContainer}>
                    <h2>{memory.create_date}</h2>
                </div>
            </div>
        </Link>
    )

}

export default MemoryCard;