import React from 'react';
import ReactDom from 'react-dom';
import {Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox} from 'react-bootstrap/';
import '../../public/css/introHCI.css';
export default class LogInOverLay extends React.Component{
	handleLogin(e){
		alert("You're Logged In!!!");
		this.props.changeLoginState(true);
    this.props.showLogin(false);

    
	}
	
 
  render() {
  

    return (<div className="container" id="logInOL">
    	<Form horizontal action="/login" onSubmit={this.handleLogin.bind(this)}>
    		<FormGroup controlId="formHorizontalEmail">
    			<Col componentClass={ControlLabel} sm={2}>
    				Email
    			</Col>
    			<Col sm={10}>
        			<FormControl type="email" placeholder="Email" />
      			</Col>
    		</FormGroup>

   		 <FormGroup controlId="formHorizontalPassword">
     		 <Col componentClass={ControlLabel} sm={2}>
       			 Password
      		 </Col>
      		 <Col sm={10}>
       	 		<FormControl type="password" placeholder="Password" />
     		 </Col>
    	</FormGroup>

	    <FormGroup>
	      <Col smOffset={2} sm={10}>
	        <Checkbox>Remember me</Checkbox>
	      </Col>
	    </FormGroup>

	    <FormGroup>
	      <Col smOffset={2} sm={10}>
	        <Button type="submit">
	          Sign in
	        </Button>
	      </Col>
	    </FormGroup>
	  </Form>
	  </div>
      
    );
  }
}