import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    }, [])
    return (
        <div className='appointment-container row mx-auto my-5'>
            <h2 className='mb-3'>Get Appointment Here</h2>
        {
            serviceDetails.map(serviceDetail => <ServiceDetail 
            key={serviceDetail.key}
            serviceDetail={serviceDetail}
            ></ServiceDetail>)
        }
    </div>
    );
};

export default ServiceDetails;