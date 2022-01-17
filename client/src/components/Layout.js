import React, { useContext } from 'react'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Layout = () => {
  const navigate = useNavigate();

  const {authenticated, handleLogout} = useContext(AuthContext);

  const renderUILinks =()=>{
    if(authenticated){
      return(
        <>
        <Nav.Link eventKey = "/profile">Profile</Nav.Link>
        <Button onClick={()=>handleLogout(navigate)}>Logout</Button>
        </>
      )
    } else {
      return(
        <>
          <Nav.Link eventKey = "/login">Login</Nav.Link>
          <Nav.Link eventKey = "/register">New User</Nav.Link>
        </>
      )
    };
  };

  const handleSelect = (eventKey) => {
    navigate(eventKey)
  };

  return(
    <>
      <Navbar expand = "md" bg = "dark" variant = "dark">
        <Container fluid>
          <Navbar.Brand onClick = {()=>navigate("/")}>Cool Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="response-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" onSelect = {handleSelect}>
              <Nav.Link eventKey = "/">Home</Nav.Link>
              <Nav.Link eventKey = "/recordings">Timeline</Nav.Link>
              <Nav.Link eventKey = "/mood">Mood</Nav.Link>
              <Nav.Link eventKey = "/activities">Activities</Nav.Link>
              <Nav.Link eventKey = "/aboutus">About Us</Nav.Link>
            </Nav>
            <Nav className="justify-content-end" onSelect = {handleSelect}>
              {renderUILinks()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;