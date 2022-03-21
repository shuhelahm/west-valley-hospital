import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { name, about, img } = service;
    return (
        <div  className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service">
                <img src={img} alt="" />
                <h6>{name}</h6>
                <p>{about}</p>
                <button className='btn btn-warning'><Link to='/servicedetails'>Details</Link></button>
            </div>
        </div>
    );
};

export default Service;