import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
    return (
            <>
  <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">West Valley Hospital</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/tests">Medical Tests</Nav.Link>
      <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
      { user.email ? <button className='btn btn-danger' onClick={logOut}>Logout</button>
      :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
      <Navbar.Text>
        Logged in as: <a href="#login">{user.displayName && user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar> 
</>

    );
};

export default Header;