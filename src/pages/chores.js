import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/chores.css'
import Draggable from 'react-draggable';
import data from '../data.json'

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
      }
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
  
  ReturnHandleClick(){
    
  }
  render() {
    var choreElementBox = [];
    var j;

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

    console.log(dragHandlers);
    return ( <div id="choreContainer">
    {choreElementBox}</div>
    );
  }
}
