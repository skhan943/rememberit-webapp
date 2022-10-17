import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchAndFilterForm.module.css';

const SearchAndFilterForm = (props) => {

    let { userInput, handleChange } = props;

    return(
        <div className={styles.outer}>
            <form >
                <div className={styles.inner}>
                    <label>Title:</label><br/>
                    <input type="search" name="title" onChange={handleChange} /><br/>
                    <label>Content Type:</label><br/>
                    <div className={styles.buttonContainer}>
                        <input type="radio" value="text" checked={userInput.contentType === 'text'} name="contentType" onChange={handleChange} /> Text
                        <input type="radio" value="link" checked={userInput.contentType === 'link'} name="contentType" onChange={handleChange} /> Link
                        <input type="radio" value="any" checked={userInput.contentType === 'any'} name="contentType" onChange={handleChange} /> Any
                    </div>
                    <br/>
                </div>
            </form>
        </div>
    )
}

export default SearchAndFilterForm;