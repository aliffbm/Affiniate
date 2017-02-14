

//import React from 'react';
//import NavContent from './nav';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';


import NavContent from './nav';
class NavBox extends React.Component{



		constructor(){
			super();

			this.state = {
				showRoommates: false,
				showMain: true,
				showOverview: false,
				showStatistics: false,
				showChores: false,
				showMyTask: false,
				toggled: false
			};
		}
render(){
		/*let contentNodes;// = this._getMainContent();
		let choreNode;
		let toggle = "";

		if(this.state.showRoommates){
			contentNodes = this._getRoommates();
		}
		if(this.state.showChores){
			contentNodes = this._getChores();
			choreNode = "Here are the list of chores";
		}
		if(this.state.showStatistics){
			contentNodes = this._getStatistics();
		}
		if(this.state.showMyTask){
			contentNodes = this._getMyTask();
		}
		if(this.state.showOverview){
			contentNodes = this._getOverview();
		}
		if(this.state.showMain){
			contentNodes = this._getMainContent();
		}
		if(this.state.toggled){
			toggle = "toggled";
		}*/

		return( <NavContent/> );
	}

	_handleToggle(){
		this.setState({
			toggled: !this.state.toggled
		});
	}


	_handleClick(){
		this.setState({
			showRoommates: true,
			showMain: false,
			showOverview: false,
			showStatistics: false,
			showChores: false,
			showMyTask: false
		});
	}
	_handleClickMain(){
		this.setState({
			showRoommates: false,
			showMain: true,
			showOverview: false,
			showStatistics: false,
			showChores: false,
			showMyTask: false
		});
	}

	_handleClickOverview(){
			this.setState({
			showRoommates: false,
			showMain: false,
			showOverview: true,
			showStatistics: false,
			showChores: false,
			showMyTask: false
		});
	}

	_handleClickMyTask(){
			this.setState({
			showRoommates: false,
			showMain: false,
			showOverview: false,
			showStatistics: false,
			showChores: false,
			showMyTask: true
		});
	}
	_handleClickStatistics(){
			this.setState({
			showRoommates: false,
			showMain: false,
			showOverview: false,
			showStatistics: true,
			showChores: false,
			showMyTask: false
		});
	}
	_handleClickChores(){
			this.setState({
			showRoommates: false,
			showMain: false,
			showOverview: false,
			showStatistics: false,
			showChores: true,
			showMyTask: false
		});
	}

	/*_getNavContent(){

		const NavContentList = [
			{ id:1, bindHome: 'this.', home: 'AFFINIATE', intro: 'Welcome to a place to facilitate task'}
		];

		return MainContentList.map((mc) => {
			return(<MainContent header={mc.header} intro={mc.intro} key={mc.id}/>);
		});
	}
*/
	_getRoommates(){

		const RoommateList = [
			{ id: 1, name: 'Zack', task: 'VACUUM'},
			{id:2, name: 'Belal', task: 'TRASH'},
			{id:3, name: 'Aliff', task: 'DISHES'}
		];

		return RoommateList.map((rl) => {
			return(<RoommateProfile name={rl.name} task={rl.task} key={rl.id}/>);
		});
	}

	_getOverview(){
		let OverviewStuff = [{id:1, groupName: 'Awesome Tritons',
		ObjectiveSummary: 'Lets Play!!!'}];
	
		return OverviewStuff.map((om) => {
			return (<Overview groupName={om.groupName} ObjectiveSummary={om.ObjectiveSummary} key={om.id}/>);
		});
	}

	_getChores(){
		let choresList = [
			{id:1, name: 'Person 1', chore: 'Vacuum', assigned: 'Today', completed: 'No'},
			{id:2, name: 'Person 2', chore: 'Vacuum', assigned: 'Yesterday', completed: 'Yes'},
			{id:3, name: 'Person 3', chore: 'Vacuum', assigned: 'Tomorrow', completed: 'Kinda'}];
	
		return choresList.map((x) => {
			return (<Chores name={x.name} chores={x.chore} assigned={x.assigned} completed={x.completed} key={x.id}/>);
		});
	}

	_getMyTask(){
		let myTask = [
		{id:1, name: 'Person #', chore: 'Some Chore Goes Here', completed: 'Yes or No'}
		];

	return myTask.map((x)=> {
		return(<Mytask name={x.name} chores={x.chore} complete={x.completed}/>);
		});
	}
}





class RoommateProfile extends React.Component{
	render(){
		return( <div>
                        <h1>{this.props.name}</h1>
                        <p>{this.props.task}</p>
                     
           	          <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">{this.props.name}'s Profile</a> 
              </div>);
	}
}

class Overview extends React.Component{
	render(){
		return( <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Welcome to, {this.props.groupName}</h1>
                        <p>{this.props.ObjectiveSummary}</p> 
                    </div>
                </div>
            </div>
         </div> );

	}
}

class Chores extends React.Component{
	render(){
		return( <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                        <h4>{this.props.name}</h4>
                        <p>Chore: {this.props.chores}</p>
                        <p>Assigned: {this.props.assigned}</p>
                        <p>Completed: {this.props.completed}</p>
                        </div>
                    </div>
                </div>
            </div>
         </div> );

	}
}

class Mytask extends React.Component{
	render(){
		return( <div id="page-content-wrapper">
	            <div className="container-fluid">
	                <div className="row">
	                    <div className="col-lg-12">
	                        <div>
	                        <h4>Hello, {this.props.name}</h4>
	                        <p>You have been assigned {this.props.chores} as your chore</p>
	                        <p>Completed Status: {this.props.completed}</p>
	                        <p><a href="#">Update Status</a></p>
	                        </div>
	                    </div>
	                </div>
	            </div>
	         </div>);
	}
}


export default NavBox;
	

