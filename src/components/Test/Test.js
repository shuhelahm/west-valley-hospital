import React from 'react';
import './Test.css';

const Test = ({test}) => {
    const {name, img, price} = test;
    return (
        <div className='col-lg-4 col-sm-6'>
            <img className='test-img w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: $ {price}</h4>
        </div>
    );
};

export default Test;