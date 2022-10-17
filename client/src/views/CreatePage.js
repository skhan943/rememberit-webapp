import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTemplate from '../components/PageTemplate';
import MemoryForm from '../components/MemoryForm';
import CheckButton from '../components/CheckButton';
import XButton from '../components/XButton';

const CreatePage = () => {

    const [userInput, setUserInput] = useState({
        title: "",
        contentType: "",
        content: "",
        notes: "",
    });

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
        axios.post('http://localhost:8082/api/memories', {
            title: userInput.title,
            content_type: userInput.contentType,
            content: userInput.content,
            notes: userInput.notes,
            create_date: `${new Date().toLocaleDateString('en-AU')}`,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            alert("Bad Request, please fill out ALL required fields.");
            console.log(err.response);
        });
    }

    return(
        <PageTemplate 
            leftBarContent={<XButton linkTo={'/'} />}
            middleContent={<MemoryForm userInput={userInput} handleChange={handleChange}/>}
            rightBarContent={<CheckButton linkTo={'/'} onClick={onSubmit}/>}
        />
    )
}

export default CreatePage;