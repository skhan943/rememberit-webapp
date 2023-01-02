import React, { useEffect, useState } from 'react';
import styles from './MemoryList.module.css';
import axios from 'axios';
import MemoryCard from './MemoryCard';

const MemoryList = (props) => {

    let { queryTitle, queryType } = props;

    const [memoryList, setMemoryList] = useState({
        memories: []
    });

    useEffect(()=>{
        axios.get('http://localhost:8082/api/memories', {params: {title: queryTitle, type: queryType}})
            .then(res => {
                setMemoryList({
                    memories: res.data
                })
            })
            .catch(err => {
                console.log("Error in MemoryList")
            });
    }, []);

    const displayList = memoryList.memories.map(mem => <MemoryCard memory={mem} key={mem._id} />);

    return(
        <div className={styles.list}>
            {displayList}
        </div>
    );
}

export default MemoryList;