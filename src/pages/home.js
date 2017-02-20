import React from 'react';
import ReactDom from 'react-dom';
import Data from '../data.json';
import '../../public/css/introHCI.css';

export default class Home extends React.Component{



render(){
	let images = [];

	for(var i=0;i<Data[3].emotions.length;i++)
	{
		console.log(Data[3].emotions[i].imageDir);
		images.push(<div className="col-sm-3 text-center"><img id="imageHome" src={Data[3].emotions[i].imageDir}></img><figcaption id="emotiCaption"><strong>{Data[3].emotions[i].name} Hits: {Data[3].emotions[i].hits}</strong></figcaption></div>);
	}
	return(


		<div className="container-fluid" id="homePage">

			<div className="container" id="containerHome">
				<div className="row" id="rowHomeEmoticons">	
				{images}
				</div>
				
			
			</div>
		</div>

		);



}



}