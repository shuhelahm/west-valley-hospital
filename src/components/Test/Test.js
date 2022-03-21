import React from 'react';
import './Test.css';

const Test = ({test}) => {
    const {name, img, price} = test;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='test'>
                <img className='test-img w-100' src={img} alt="" />
                <h2>{name}</h2>
                <h4>Price: $ {price}</h4>
            </div>
        </div>
    );
};

export default Test;