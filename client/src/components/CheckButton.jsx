import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheck2 } from 'react-icons/bs';
import styles from './CheckButton.module.css';

const CheckButton = (props) => {
    return (
        <div className={styles.container}>
            <button onClick={props.onClick}>
                <Link to={props.linkTo}>
                    <BsCheck2 style={{ color: 'black', fontSize: '50px', margin: '20px' }} />
                </Link>
            </button>
        </div>
    )
}

export default CheckButton;