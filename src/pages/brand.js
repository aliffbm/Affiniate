import React from 'react';
import ReactDom from 'react-dom';
import {Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox} from 'react-bootstrap/';
import '../../public/css/introHCI.css';


export default class LogInOverLay extends React.Component{
	handleLogin(e){
		alert("You're Logged In!!!");
		this.props.changeLoginState(true);
	}
		
 
  render() {
  return( 
    <div className="container-fluid" id="imgBrand">
    	<div className="conainer-fluid" id="bodySectionHeader">
    	<div className="text-center row">
    		<div className="col-sm-12">
    			<h1>Fostering Team Work Through Empathy</h1>
                <hr></hr>
    		</div>
    	
    	</div>
    	<div className="container">
    	<div className="text-center row">
    		<div class="col-sm-12">
    		<p></p>
    		  </div>
    	</div>
    	</div>
    	</div>

    </div>
      
    );
  }
}