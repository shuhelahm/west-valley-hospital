import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleEmailChange , handlePasswordChange ,handleLogin, error } = useAuth();
    return (
        <Container>
          <Typography variant='h3' sx={{my:4, fontWeight: 'bold'}}>
          Login Here
            </Typography>
            <Box className='m-5'>
            <form  onSubmit={handleLogin}>
  
    <TextField required onBlur={handleEmailChange} type="email"  label="Email" variant="outlined" /> 

    <TextField required onBlur={handlePasswordChange} type="password"  label="Password" variant="outlined" /> 

  <Typography className='text-danger'>{error}</Typography>
  <Button type="submit">Login</Button>
  <Typography className='my-2'><Link to='/register'>New user? Register here.</Link></Typography>
  <Typography>or</Typography>
</form>
<Button onClick={signInUsingGoogle}>Google Sign In</Button>
</Box>
    </Container>
    );
};

export default Login;