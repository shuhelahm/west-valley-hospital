import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const ServiceDetail = ({serviceDetail}) => {
    const {name, about, img} = serviceDetail
    return (
        <Grid item xs={4} sm={4} md={4}>

            <Card sx={{height: 500}}>
                <CardMedia
                component="img"
                style={{
                    width: '100%',
                    height: '150'
                    
                }}
                image={img}
                alt="Doctor Image"
                />
                <CardContent>
                    <Typography variant='h6'>{name}</Typography>
                    <Typography sx={{fontSize: '13px'}}>{about}</Typography>
                </CardContent>
                <CardActions>
                    <Button>Get Appointment</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ServiceDetail;