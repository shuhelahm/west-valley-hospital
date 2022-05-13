import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
        <Box sx={{width: '100%',backgroundColor: 'darkslategrey',p: '30px 0', color: 'white'}}>
            <Grid spacing={2} xs={4} sm={8} md={12}>
                    <Grid xs={4} sm={4} md={2}>
                        <Typography variant='h4'>West Valley Hospital</Typography>
                        <Typography sx={{fontSize: '14px'}}>West Valley Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={6}>
                    <Typography variant='h4' >Total Branches:</Typography>
                        <Typography>
                                Dhaka
                        </Typography>
                        <Typography>
                                Chittagong
                        </Typography>
                        <Typography>
                                Sylhet
                        </Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={6} className='footer-contact'>
                    <Typography variant='h4'>Get Us</Typography>
                        <ul>
                            <li>21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</li>
                            <li>10633, +8809666700100</li>
                            <li>info@wvh.com.bd, wvh.dhaka@gmail.com</li>
                        </ul>
                    </Grid>
            </Grid>
            <p>Copyright 2021<span >&copy;</span> || West Valley Hospital</p>
        </Box> 
        </footer>
    );
};

export default Footer;