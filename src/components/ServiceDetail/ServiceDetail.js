import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({serviceDetail}) => {
    const {name, about, img} = serviceDetail
    return (
        <div className="serviceDetail col-lg-4 col-sm-6">
            <img className='w-100 serviceDetailImg' src={img} alt="" />
            <h1>{name}</h1>
            <p>{about}</p>
            <button className='btn btn-warning'>Get Appointment</button>
        </div>
    );
};

export default ServiceDetail;