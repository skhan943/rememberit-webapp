import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageTemplate from '../components/PageTemplate';
import MemoryForm from '../components/MemoryForm';
import CheckButton from '../components/CheckButton';
import XButton from '../components/XButton';

const UpdatePage = () => {

    const { id } = useParams();

    const [userInput, setUserInput] = useState({
        title: "",
        contentType: "",
        content: "",
        notes: "",
    });

    useEffect(()=>{
        axios.get(`http://localhost:8082/api/memories/${id}`)
            .then(res => {
                setUserInput({
                    title: res.data.title,
                    contentType: res.data.content_type,
                    content: res.data.content,
                    notes: res.data.notes
                })
            })
            .catch(err => {
                console.log("Error in MemoryList")
            });
    }, []);

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
        axios.put(`http://localhost:8082/api/memories/${id}`, {
            title: userInput.title,
            content_type: userInput.contentType,
            content: userInput.content,
            notes: userInput.notes,
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
            leftBarContent={<XButton linkTo={`/${id}`} />}
            middleContent={<MemoryForm userInput={userInput} handleChange={handleChange}/>}
            rightBarContent={<CheckButton linkTo={`/${id}`} onClick={onSubmit}/>}
        />
    )
}

export default UpdatePage;