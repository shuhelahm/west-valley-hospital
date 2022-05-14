import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Test = ({test}) => {
    const {name, img, price} = test;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, height: 500 }}>
                <CardMedia
                 component="img"
                 style={{
                     width: '100%',
                     height: '350px'
                     
                 }}
                 image={img}
                 alt="Test Image"
                />
                <CardContent>
                <Typography>{name}</Typography>
                <Typography>Price: $ {price}</Typography>
                </CardContent>    
            </Card>
        </Grid>
    );
};

export default Test;