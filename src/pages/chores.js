import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/chores.css'
import Draggable from 'react-draggable';
import data from '../data.json';


var divStyle;


//console.log("Print a string version: " + str);

let theData = [];
for(var i=0;i<data[1].chores.length;i++){
  theData.push(data[1].chores[i]);
}

//let items = this.props.theData;

//console.log(items);

export default class Chores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      },
      resultsArr: theData
    };

    this._bind("handleDrag");
  }



  _bind(...methods) {
        methods.forEach(method => this[method] = this[method].bind(this));
  }

  handleDrag (e, ui) {
    this.setState({
      deltaPosition: {
        x: this.state.deltaPosition.x + ui.deltaX,
        y: this.state.deltaPosition.y + ui.deltaY
			}
    });

 
  }


  onStart() {
    this.setState({
      activeDrags: ++this.state.activeDrags
    });

  }

  onStop() {
    this.setState({
      activeDrags: --this.state.activeDrags
    });
  }

  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      controlledPosition: {
        x: this.state.controlledPosition.x-10
      }
    });
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      controlledPosition: {
        y: this.state.controlledPosition.y-10
      }
    });

  }

  onControlledDrag(e, position) {
    this.setState({
      controlledPosition: {
        x: position.x,
        y: position.y
      }
    });

  }

  onControlledDragStop(e, position) {
    this.setState({
      controlledPosition: {
        x: position.x,
        y: position.y
      }
    });
  }

  handle1(){

    alert("Neutral!!!");
  }
  
  handle2(){

    alert("Neutral!!!");
  }
  handle3(){

    alert("Neutral!!!");
  }
  handle4(){

    alert("Neutral!!!");
  }
  __handleClick(){
    
    console.log("Handle 1 clicked");
    console.log(this);
    //console.log(data[4].emotions.length);
   
  }
  render() {
  //var choreElementBox = [];
 
      var items = theData;
    console.log(items);
    console.log(this);

    var itemsList = items.map((chore) => {
       divStyle = {
       backgroundImage: 'url(' + chore.image + ')',
      };
      console.log(chore.handler);

     console.log(chore.id);
      console.log("image:  " + chore.image);
      return(<Draggerss key={chore.id} handler={this.__handleClick.bind(this)} style={divStyle}  name={chore.name}/>);

    })




    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };

  
    return ( <div id="choreContainer">

    {itemsList}</div>
    );

  }

}

class Draggerss extends React.Component{
  render(){
    return(
      <Draggable axis="y" href="#" key={this.props.key}>
        <div className="divBigger" id="alignCenter" onClick={this.props.handler}>
          <div className="thumb" style={this.props.style}>
         </div>
        <h1 className="text">{this.props.name}</h1>
        </div>
      </Draggable>
    )
  }
}