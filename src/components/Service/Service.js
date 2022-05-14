import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Service.css';


const Service = ({service}) => {
    const { name, about, img } = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, height: 500 }}>
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
        <Typography variant="h6"  color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 13 }} component="div">
          {about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to='/servicedetails'>Details</Link></Button>
      </CardActions>
    </Card>
        </Grid>
    );
};

export default Service;