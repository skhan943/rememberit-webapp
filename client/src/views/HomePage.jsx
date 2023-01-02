import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import MemoryList from '../components/MemoryList';
import ButtonGroup from '../components/ButtonGroup';

const HomePage = () => {

    const search = useLocation().search;
    let title = new URLSearchParams(search).get('title');
    let type = new URLSearchParams(search).get('type');

    if (type === 'any'){
        type = '';
    }

    return(
        <PageTemplate rightBarContent={<ButtonGroup />} middleContent={<MemoryList queryType={type} queryTitle={title} />} />
    )
}

export default HomePage;