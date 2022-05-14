import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
     <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
  </Navbar>  
  );
};

export default Header;