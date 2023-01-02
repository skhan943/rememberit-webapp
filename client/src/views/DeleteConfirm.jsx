import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageTemplate from '../components/PageTemplate';
import CheckButton from '../components/CheckButton';
import XButton from '../components/XButton';
import DelConfirmMsg from '../components/DelConfirmMsg';

const DeletePage = () => {

    const { id } = useParams();

    const onSubmit = () => {
        axios.delete(`http://localhost:8082/api/memories/${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            alert("Bad Request");
            console.log(err.response);
        });
    }

    return(
        <PageTemplate 
            leftBarContent={<XButton linkTo={`/${id}`} />}
            middleContent={<DelConfirmMsg />}
            rightBarContent={<CheckButton linkTo={'/'} onClick={onSubmit}/>}
        />
    )
}

export default DeletePage;