import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/chores.css'
import Draggable from 'react-draggable';
// import data from '../data.json'

const divStyle = {
  backgroundImage: 'url(' + "images/laundry.jpg" + ')',
};

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

  render() {
    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };
    return ( 
    <Draggable axis="y">
    <div className="divBigger">
      <div className="thumb" style={divStyle}>
        
      </div>
    <h1 className="text">Chores</h1>
    </div>
    </Draggable>
    );
  }
}
