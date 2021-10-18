import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const { name, about, img } = service;
    return (
        <div  className="service col-lg-4 col-sm-6">
            <img className='dr-img' src={img} alt="" />
            <h1>{name}</h1>
            <p>{about}</p>
            <button className='btn btn-warning'>Details</button>
        </div>
    );
};

export default Service;