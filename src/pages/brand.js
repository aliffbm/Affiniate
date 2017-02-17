import React from 'react';
import ReactDom from 'react-dom';
import {Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox} from 'react-bootstrap/';

export default class LogInOverLay extends React.Component{
	handleLogin(e){
		alert("You're Logged In!!!");
		this.props.changeLoginState(true);
	}
	
 
  render() {
  return( 
    <div><img src="images/gear.jpg"></img></div>
      
    );
  }
}