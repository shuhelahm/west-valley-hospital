import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';

const Register = () => {
    const {handleEmailChange , handlePasswordChange,handleRegistrantion, signInUsingGoogle, error} = useAuth();
    return (
        <div>
          <Typography variant='h3' sx={{my:4, fontWeight: 'bold'}}>
            Register Here
            </Typography>
            <div className='m-5'>
            <form  onSubmit={handleRegistrantion}>
  <div className="row mb-3">
    <TextField required onBlur={handleEmailChange} type="email"  label="Email" variant="outlined" /> 
  </div>
  <div className="row mb-3">
    <TextField required onBlur={handlePasswordChange} type="password"  label="Password" variant="outlined" /> 
  </div>
  <p className='text-danger'>{error}</p>
  <Button type="submit">Register</Button>
  <p className='my-2'><Link to='/login'>Already registered? Login here.</Link></p>
  <h2>or</h2>
</form>
<Button className='btn btn-warning' onClick={signInUsingGoogle}>Google Sign In</Button>
</div>
            
        </div>
    );
};

export default Register;