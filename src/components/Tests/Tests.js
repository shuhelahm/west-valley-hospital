import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Test from '../Test/Test';

const Tests = () => {
    const [tests, setTests] = useState([]);
    useEffect( () =>{
        fetch('tests.json')
        .then(res => res.json())
        .then(data => setTests(data))
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography variant='h4' sx={{mb:4, fontWeight: 'bold'}}>
            Medical Tests Available
            </Typography>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                tests.map( test => <Test
                key={test.key}
                test={test}></Test>)
                }
            </Grid>
           
        </Container>
        </Box>
    );
};

export default Tests;