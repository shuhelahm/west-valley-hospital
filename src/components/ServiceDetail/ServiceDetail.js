import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({serviceDetail}) => {
    const {name, about, img} = serviceDetail
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="serviceDetail">
                <img className='w-100 serviceDetailImg' src={img} alt="" />
                <h1>{name}</h1>
                <p>{about}</p>
                <button className='btn btn-warning'>Get Appointment</button>
            </div>
        </div>
    );
};

export default ServiceDetail;