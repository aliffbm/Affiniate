
import React from 'react';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/introHCI.css';
import {Link} from 'react-router';
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap/';


export default class Navigation extends React.Component{
  _handle_logout(e){
    this.props.changeLoginState(false);
  console.log(e);
}

render(){
  return (<div>
            <Navbar className="navbar-fixed-top" fluid id="navbar-default-override" collapseOnSelect >
                <Navbar.Header className="navbarColor" id="navHeaderLeft">
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
                  <Nav pullRight className="navbarColor" id="navHeaderRight">
                    <NavItem eventKey={2} id="makeWhite" href="#"><span className="glyphicon glyphicon-log-in" onClick={this._handle_logout.bind(this)}></span> Log Out</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
      } 
}



