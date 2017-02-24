import React from 'react';
import ReactDom from 'react-dom';
import Data from '../data.json';
import '../../public/css/introHCI.css';



var assignedTaskImage = Data[1].chores[0].image;
export default class Home extends React.Component{

	constructor(){
		super(); 
		this.state = {
			isCompleted: false,
			theData: {}
		}
	}

	chore_complete(){
		alert("Chore Completed!");


		this.setState({isCompleted: true});

	}

	

render(){
	let images = [];

	for(var i=0;i<Data[3].emotions.length;i++)
	{
		images.push(<div key={Data[3].emotions[i].key} className="col-sm-3 text-center"><img id="imageHome" src={Data[3].emotions[i].imageDir}></img><figcaption id="emotiCaption"><strong>{Data[3].emotions[i].name} Hits: {Data[3].emotions[i].hits}</strong></figcaption></div>);
	}

	
	var divStyle;
	if(this.state.isCompleted){
		divStyle = {
			backgroundColor: "#fff",
		}
	}else{

		divStyle = {
		backgroundImage: 'url('+assignedTaskImage+')',
	};
	}	

	return(


		<div className="container-fluid" id="homePage">

}
			<div className="container" id="containerHome">
				<div className="row" id="task_to_complete_home">
					<div className="col-sm-12 text-center">
						
					 	<div className="col-sm-7" id="size_of_task_div" style={divStyle}>
					 	<div className="col-sm-12" id="task_text_container_header">
					 		<h3>Your task is dishes</h3>
					 	</div>
					 	<div className="col-sm-12" id="task_text_container_info">
					 	<p># of days to Complete: No.</p>
         				</div>
         				</div>
         				<div className="col-sm-5">
         				<p>When dishes are clean people...</p>
         				<ul id="myTaskSentiment">
         					<li><img src="images/happyCartWheel.png"/>Feel better</li>
         					<li><img src="images/money.png"/> Don't have to spend money to eat out</li>
         				</ul>
         				</div>
					</div>
					<div className="col-sm-2">
					</div>
					<div className="col-sm-3 text-center" id="complete_chore_btn">

				<button type="button" className="btn btn-primary btn-lg raised" onClick={this.chore_complete}>Compete Chore!</button>											
					</div>
					<div className="col-sm-7">
					</div>
				</div>
				<div className="row" id="rowHomeEmoticons">	
				{images}

				</div>
				
			
			</div>
		</div>

		);



}



}