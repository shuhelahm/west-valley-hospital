import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    }, [])
    return (
        <div className='row w-75 mx-auto my-5'>
            <h1 className='my-4'>Get Appointment Here</h1>
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