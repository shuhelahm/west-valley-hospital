import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import useAuth from '../../contexts/useAuth';
// import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import { Button } from '@mui/material';

const headerLink ={
  color: 'white',
  margin: '0 20px',
  textDecoration: 'none'
}

const Header = () => {
  const { user, logOut } = useAuth();
    return (
            <>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link style={headerLink} to='/home'>Home</Link>
          <Link style={headerLink} to="/services">Services</Link>
          <Link style={headerLink} to="/tests">Tests</Link>
          <Link style={headerLink} to="/register">Register</Link>
          {
            user.email ? 
             <Button style={headerLink} onClick={logOut}>Logout</Button>
            : 
            <Link style={headerLink} to="/login">Login</Link>
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  {/* <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container className='menu-container'>
    <Navbar.Brand href="/home">West Valley Hospital</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/tests">Medical Tests</Nav.Link>
      <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
      { user.email ? <button className='btn btn-danger me-2' onClick={logOut}>Logout</button>
      :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      { user.email &&
      <div className='user-name'>
        Logged in as: {user.displayName}
      </div>
  
      }
      
      
    </Navbar.Collapse>
    </Container>
  </Navbar>  */}
</>

    );
};

export default Header;