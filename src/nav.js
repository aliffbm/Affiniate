'use strict';
import React from 'react';

//import NavBar from 'react-bootstrap/lib/Navbar';


export default class NavContent extends React.Component{
  
  render(){
    return(
    <nav className="navbar navbar-inverse">
          <div className="container-fluid">
               <div className="navbar-header">
                <a className="navbar-brand" href="#">AFFINIATE</a>
              </div>
              <ul className="nav navbar-nav">
                  <li className="active"><a href="#"></a></li>
                  <li><a href="#">home</a></li>
                  <li><a href="#">chores</a></li>
                  <li><a></a></li>
              </ul>
            </div>
        </nav>  
        
    );
  }

}
