import { Typography } from '@mui/material';
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
            <Typography variant='h4' sx={{mb:3, fontWeight: 'bold'}}>
            Get Appointment Here
            </Typography>
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