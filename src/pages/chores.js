import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/chores.css'
import Draggable from 'react-draggable';
import data from '../data.json';
import $ from 'jquery';

var divStyle;
console.log(data[1].chores[0].Image);

//console.log("Print a string version: " + str);




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
      clicked: false
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

  handleN(){

    alert("Neutral!!!");
  }
  
  __handleClick(){
    console.log("Handle clicked");
    console.log(this.props.children);
    //console.log(data[4].emotions.length);
   
   
     $("#choreContainer").append('<h1 id="chooseFeeling"><ul><li><a href="#" onClick={this.handleN.bind(this)}>Happy</a></li><li><a href="#">Dissappointed</a></li><li><a href="#">Worried</a></li><li><a href="#">Neutral</a></li></ul></h1>');
  }
  render() {
    var choreElementBox = [];
    let j;
    if(this.state.clicked){
      alert("It worked?");
      j = <div>Did it work?</div>;
    }

    for(var i=0; i<data[1].chores.length;i++){
      var str = JSON.stringify(data[1].chores[i].Image);
      divStyle = {
       backgroundImage: 'url(' + str + ')',
      };
    

     
      choreElementBox.push( <Draggable axis="y" href="#">
        <div className="divBigger" id="alignCenter">
          <div className="thumb" style={divStyle}>
         </div>
        <h1 className="text">{data[1].chores[i].name}</h1>
        </div>
      </Draggable>);


    }

    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };

  
    return ( <div id="choreContainer" onClick={this.__handleClick.bind(this)}>
    {j}
    {choreElementBox}</div>
    );

  }
}
