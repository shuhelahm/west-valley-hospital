import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleEmailChange , handlePasswordChange ,handleLogin, error } = useAuth();
    return (
        <div>
          <Typography variant='h3' sx={{my:4, fontWeight: 'bold'}}>
          Login Here
            </Typography>
            <div className='m-5'>
            <form  onSubmit={handleLogin}>
  <div className="row mb-3">
    <TextField required onBlur={handleEmailChange} type="email"  label="Email" variant="outlined" /> 
  </div>
  <div className="row mb-3">
    <TextField required onBlur={handlePasswordChange} type="password"  label="Password" variant="outlined" /> 
  </div>
  <p className='text-danger'>{error}</p>
  <Button type="submit">Login</Button>
  <p className='my-2'><Link to='/register'>New user? Register here.</Link></p>
  <h2>or</h2>
</form>
<Button onClick={signInUsingGoogle}>Google Sign In</Button>
</div>
        </div>
    );
};

export default Login;