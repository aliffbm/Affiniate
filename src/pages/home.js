import React from 'react';
import ReactDom from 'react-dom';
import Data from '../data.json';
import '../../public/css/introHCI.css';

export default class Home extends React.Component{

_chore_complete(){
	alert("Chore Completed!");
}

render(){
	let images = [];

	for(var i=0;i<Data[3].emotions.length;i++)
	{
		console.log(Data[3].emotions[i].imageDir);
		images.push(<div key={Data[3].emotions[i].key} className="col-sm-3 text-center"><img id="imageHome" src={Data[3].emotions[i].imageDir}></img><figcaption id="emotiCaption"><strong>{Data[3].emotions[i].name} Hits: {Data[3].emotions[i].hits}</strong></figcaption></div>);
	}

	const divStyle = {
		backgroundImage: 'url('+Data[1].chores[0].image+')',
	};

	return(


		<div className="container-fluid" id="homePage">

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
         					<li><img style={{width: "40px"}} src="images/happyCartWheel.png"/>Feel better</li>
         					<li><img style={{width: "40px"}} src="images/money.png"/> Don't have to spend money to eat out</li>
         				</ul>
         				</div>
					</div>
					<div className="col-sm-2">
					</div>
					<div className="col-sm-3 text-center" id="complete_chore_btn">

					<button type="button" className="btn btn-primary btn-lg raised">Compete Chore!</button>											
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