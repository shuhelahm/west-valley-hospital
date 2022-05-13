import { Container, Grid, Typography } from '@mui/material';
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
        <Container>
            <Typography variant='h4' sx={{mb:3, fontWeight: 'bold'}}>
            Get Appointment Here
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
            serviceDetails.map(serviceDetail => <ServiceDetail 
            key={serviceDetail.key}
            serviceDetail={serviceDetail}
            ></ServiceDetail>)
        }
              </Grid>     
    </Container>
    );
};

export default ServiceDetails;