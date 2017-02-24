import React from 'react';
//import Fetch from '../../node_modules/react-fetch/build/react-fetch';
import Fetch from 'react-fetch';
import Chores from './chores.js';
export default class TestFectch extends React.Component{
	render(){
		return(<Fetch url="/view"><TestComponent/></Fetch>);
	}
}


class TestComponent extends React.Component{
	render(){
		console.log("Did this work?");
		console.log(this.props);
		return(<div><Chores {...this.props}/></div>)
	}
}