import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import styles from './EditAndDeleteGroup.module.css';

const EditAndDeleteGroup = (props) => {

    return(
        <div className={styles.buttonContainer}>
            <button className={styles.editButton}>
                <Link to={`/${props.memoryId}/update`}>
                    <AiOutlineEdit style={{ color: 'black', fontSize: '50px', margin: '20px' }} />
                </Link>
            </button>
            <button className={styles.deleteButton}>
                <Link to={`/${props.memoryId}/delete`}>
                    <AiOutlineDelete style={{ color: 'black', fontSize: '50px', margin: '20px' }} />
                </Link>
            </button>
        </div>
    );
}

export default EditAndDeleteGroup;