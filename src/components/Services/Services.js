import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import { Container, Typography } from '@mui/material';

const Services = () => {
    const [ services, setServices ] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
          <Box sx={{ flexGrow: 1 }}>
            <Container>
              <Typography variant='h3' sx={{ fontWeight: 'bold', my: 1.5 }}>
                Services
              </Typography>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                services.map(service => (<Service service={service} key={service.name}
                ></Service>
                ))
                }
              </Grid>
            </Container>
          </Box>
        //     <div className='sevices-container row mx-auto my-5' id="services">
            
        //     {
        //         services.map(service => <Service 
        //         key={service.key}
        //         service={service}
        //         ></Service>)
        //     }

        // </div>
    );
};

export default Services;