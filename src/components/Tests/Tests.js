import React, { useEffect, useState } from 'react';
import Test from '../Test/Test';

const Tests = () => {
    const [tests, setTests] = useState([]);
    useEffect( () =>{
        fetch('tests.json')
        .then(res => res.json())
        .then(data => setTests(data))
    }, []);

    return (
        <div className='row w-75 mx-auto my-5'>
           {
               tests.map( test => <Test
               key={test.key}
               test={test}></Test>)
           }
        </div>
    );
};

export default Tests;