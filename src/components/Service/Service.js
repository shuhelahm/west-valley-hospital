import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { name, about, img } = service;
    return (
        <div  className="col-lg-4 col-sm-6">
            <div className="service">
                <img className='dr-img' src={img} alt="" />
                <h1>{name}</h1>
                <p>{about}</p>
                <button className='btn btn-warning'><Link to='/servicedetails'>Details</Link></button>
            </div>
        </div>
    );
};

export default Service;