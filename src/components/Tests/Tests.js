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
            <h1 className='mb-4'>Medical Tests Available</h1>
           {
               tests.map( test => <Test
               key={test.key}
               test={test}></Test>)
           }
        </div>
    );
};

export default Tests;