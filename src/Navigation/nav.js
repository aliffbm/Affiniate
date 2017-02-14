
import React from 'react';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';

//import NavBar from 'react-bootstrap/lib/Navbar';


import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap/';


const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">AFFINIATE</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav className="pull-left">
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">Groups</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</NavItem>
        <NavItem eventKey={2} href="#"><span className="glyphicon glyphicon-log-in"></span> Log In</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbarInstance;