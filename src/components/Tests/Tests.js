import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Test from '../Test/Test';
import './Tests.css';

const Tests = () => {
    const [tests, setTests] = useState([]);
    useEffect( () =>{
        fetch('tests.json')
        .then(res => res.json())
        .then(data => setTests(data))
    }, []);

    return (
        <div className='tests-container row mx-auto my-5'>
            <Typography variant='h4' sx={{mb:4, fontWeight: 'bold'}}>
            Medical Tests Available
            </Typography>
           {
               tests.map( test => <Test
               key={test.key}
               test={test}></Test>)
           }
        </div>
    );
};

export default Tests;