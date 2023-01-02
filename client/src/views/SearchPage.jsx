import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTemplate from '../components/PageTemplate';
import CheckButton from '../components/CheckButton';
import XButton from '../components/XButton';
import SearchAndFilterForm from '../components/SearchAndFilterForm';

const SearchPage = () => {

    const [userInput, setUserInput] = useState({
        title: "",
        contentType: "",
    })

    const handleChange = (e) => {
        console.log(e.target.name + ' ' + e.target.value);
        setUserInput(prevState => {
            return {
                ...userInput,
                [e.target.name]: e.target.value,
            }
        })
    }

    const onSubmit = () => {
        console.log('submitted');
    }

    return(
        <PageTemplate 
            leftBarContent={<XButton linkTo={'/'} />}
            middleContent={<SearchAndFilterForm userInput={userInput} handleChange={handleChange}/>}
            rightBarContent={<CheckButton linkTo={`/?title=${userInput.title}&type=${userInput.contentType}`} onClick={onSubmit}/>}
        />
    )
}

export default SearchPage;