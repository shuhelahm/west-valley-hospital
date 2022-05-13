import { Button, Container, TextField, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';

const Register = () => {
    const {handleEmailChange , handlePasswordChange,handleRegistrantion, signInUsingGoogle, error} = useAuth();
    return (
        <Container>
          <Typography variant='h3' sx={{my:4, fontWeight: 'bold'}}>
            Register Here
            </Typography>
            <Box>
            <form  onSubmit={handleRegistrantion}>
    <TextField required onBlur={handleEmailChange} type="email"  label="Email" variant="outlined" /> 
    <TextField required onBlur={handlePasswordChange} type="password"  label="Password" variant="outlined" /> 

  <Typography className='text-danger'>{error}</Typography>
  <Button type="submit">Register</Button>
  <Typography className='my-2'><Link to='/login'>Already registered? Login here.</Link></Typography>
  <Typography>or</Typography>
</form>
</Box>
<Button className='btn btn-warning' onClick={signInUsingGoogle}>Google Sign In</Button>
</Container>
    );
};

export default Register;