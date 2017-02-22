import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/chores.css';
import '../../public/css/introHCI.css'



import Data from '../data.json';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';



var choreItems =[];
for(var i=0;i<Data[1].chores.length;i++){
  choreItems[i] = Data[1].chores[i];
}



const SortableItem = SortableElement(({value, value2, value3}) =><div>{value2} <img className="text-center" style={{width: "500px"}} id="listImages" src={value}></img>{value3}</div>);

const SortableList = SortableContainer(({items}) => {
    return (
        <div className="container">
          <ul>
            {items.map((value, index) =>
              <div className="container">
                <SortableItem key={`item-${index}`} index={index} value={value.image} value2={value.name} value3={index + 1}/>
              </div>
            )}
          </ul>
        </div>
    );
});

export default class chores extends Component {
    state = {
        items: [choreItems[0], choreItems[1], choreItems[2], choreItems[3]]
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    };
    render() {
        return (
          <div className="container text-center" id="listContainer">
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
          </div>
        )
    }
}





/*
var divStyle;



let theData = [];
for(var i=0;i<data[1].chores.length;i++){
  theData.push(data[1].chores[i]);
}

export default class Chores extends React.Component {

  constructor(props) {
    super(props);


} 
  __handleClick(){
    
    //console.log(data[4].emotions.length);
   
  }
  render() {
  //var choreElementBox = [];
 
      var items = theData;
   

    var itemsList = items.map((chore) => {
       divStyle = {
       backgroundImage: 'url(' + chore.image + ')',
      };
      
      }
      return(<div></div>);

    })

*/