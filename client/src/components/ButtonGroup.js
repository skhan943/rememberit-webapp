import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsFilter } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './ButtonGroup.module.css';

const ButtonGroup = () => {
    return(
        <div className={styles.buttonContainer}>
            <button className={styles.searchButton}>
                <Link to='/search'>
                    <BsSearch style={{ color: 'black', fontSize: '50px', margin: '20px' }}/>
                </Link>
            </button>
            <button className={styles.filterButton}>
                <Link to='/search'>
                    <BsFilter style={{ color: 'black', fontSize: '50px', margin: '20px' }}/>
                </Link>
            </button>
            <button className={styles.createButton}>
                <Link to='/create'>
                    <AiOutlinePlus style={{ color: 'black', fontSize: '50px', margin: '20px' }}/>
                </Link>
            </button>
        </div>
    );
}

export default ButtonGroup;