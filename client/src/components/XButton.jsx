import React from 'react';
import { Link } from 'react-router-dom';
import { BsX } from 'react-icons/bs';
import styles from './CheckButton.module.css';

const XButton = (props) => {
    return (
        <div className={styles.container}>
            <button onClick={props.onClick}>
                <Link to={props.linkTo}>
                    <BsX style={{ color: 'black', fontSize: '50px', margin: '20px' }} />
                </Link>
            </button>
        </div>
    )
}

export default XButton;