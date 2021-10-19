import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';

const Register = () => {
    const {handleEmailChange , handlePasswordChange,handleRegistrantion, signInUsingGoogle, error} = useAuth();
    return (
        <div>
          <h1 className='my-4'>Register Here</h1>
            <div className='m-5'>
            <form  onSubmit={handleRegistrantion}>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input onBlur={handleEmailChange} type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <p className='text-danger'>{error}</p>
  <button type="submit" class="btn btn-primary">Register</button>
  <p className='my-2'><Link to='/login'>Already registered? Login here.</Link></p>
  <h2>or</h2>
  <button className='btn btn-warning' onClick={signInUsingGoogle}>Google Sign In</button>
</form>
</div>
            
        </div>
    );
};

export default Register;