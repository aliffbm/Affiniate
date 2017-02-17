
import React from 'react';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/introHCI.css';
import {Link} from 'react-router';
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap/';


export default class UserNavigation extends React.Component{
  handleSelect(e){
  console.log(e);
}

render(){
  return (<div>
            <Navbar fluid id="navbar-default-override" collapseOnSelect >
                <Navbar.Header className="navbarColor">
                  <Navbar.Toggle className="pull-left navbarColor"/>
                   <Navbar.Brand className="navbarColor">
                    <a id="brand" href="#">AFFINIATE</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse className="navbarColor">
                  <Nav onSelect={this.handleSelect}>
                    <NavItem className="navbarColor" eventKey={1} href="#"><Link to="home" id="makeWhite">Home</Link></NavItem>
                    <NavItem className="navbarColor" eventKey={2} href="#"><Link to="chores" id="makeWhite">Chores</Link></NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="makeWhite" className="navbarColor">
                      <MenuItem className="navbarColor" id="makeWhite" eventKey={3.1}>Action</MenuItem>
                      <MenuItem className="navbarColor" id="makeWhite" eventKey={3.2}>Another action</MenuItem>
                      <MenuItem className="navbarColor" id="makeWhite" eventKey={3.3}>Something else here</MenuItem>
                     
                      
                    </NavDropdown>
                  </Nav>
                  <Nav pullRight className="navbarColor">
                    <NavItem eventKey={2} id="makeWhite" href="#"><span className="glyphicon glyphicon-log-in"></span> Log Out</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
      } 
    }

<<<<<<< HEAD
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
        <NavItem eventKey={0} href="#">Add Roommate</NavItem>
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
=======
>>>>>>> 0f8e27d238112b371fc9d1ee9197adf1ad70e6ca

