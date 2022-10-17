import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageTemplate from '../components/PageTemplate';
import MemoryDisplayForm from '../components/MemoryDisplayForm';
import CheckButton from '../components/CheckButton';
import EditAndDeleteGroup from '../components/EditAndDeleteGroup';

const ViewSinglePage = () => {

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

    return(
        <PageTemplate 
            leftBarContent={<EditAndDeleteGroup memoryId={id} />}
            middleContent={<MemoryDisplayForm userInput={userInput} />}
            rightBarContent={<CheckButton linkTo={'/'} />}
        />
    )
}

export default ViewSinglePage;