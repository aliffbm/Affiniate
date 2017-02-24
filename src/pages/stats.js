import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ReactTable from 'react-table'

import Data from '../data.json';
import '../../public/css/introHCI.css';

const data = [{
  name: 'Belal Aboabdo',
  age: 26,
}, {
  name: 'Jason Maurer',
  age: 23,
}]

const columns = [{
  header: 'Name',
  accessor: 'name' // String-based value accessors!
}, {
  header: 'Age',
  accessor: 'age',
  render: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  header: 'Friend Name',
  accessor: d => d.friend.name // Custom value accessors!
}, {
  header: props => <span>Friend Age</span>, // Custom header components!
  accessor: 'friend.age'
}]
export default class stats extends Component{
	render(){
		return (
		  	<ReactTable 
		  	data={this.data}
    		columns={columns}
    		defaultPageSize={10}
  			/>
  		)
  	}
}