import React from 'react';
import ReactDom from 'react-dom';

import data from '../data.json';

export default class Chores extends React.Component{

	render(){
	
		console.log(data);
		console.log(data[0].teammates[0].name);
		console.log(data[0].teammates.length);
		//console.log(resultData.teammates[name]);
		var user = [];


		for(var i = 0; i<data[0].teammates.length; i++){
				user.push(<div>
					<h2>Name: {data[0].teammates[i].name}</h2>
					<p>Chore: {data[0].teammates[i].currentChore}</p>
					</div>);
		}
		
		return(
				<div>	
				{user}
				</div>

		);
	}
}