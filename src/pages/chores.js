import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/chores.css';
import '../../public/css/introHCI.css';




import Data from '../data.json';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';



var choreItems =[];
for(var i=0;i<Data[1].chores.length;i++){
  choreItems[i] = Data[1].chores[i];
}



const SortableItem = SortableElement(({value1, value2, value3}) =><li id="imageList" style={{backgroundImage: 'url('+value1+')'}}><div>{value2} {value3}</div></li>);

const SortableList = SortableContainer(({items}) => {
    return (
        <div className="container" id="holdingImages">
          <ul id="imageItems">
            {items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value1={value.image} value2={value.name} value3={index + 1}/>
            
            )}
          </ul>
        </div>
    );
});

export default class chores extends Component {
    state = {
        items: [choreItems[0], choreItems[1], choreItems[2], choreItems[3]],
        lock: "images/lock_open.png",
        isLocked: false,
        emotionPrompt: false
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    };

    handleLock(e){
      if(!this.state.isLocked){
        this.setState({lock: "images/lock_closed.png"});
        alert("Chores Saved");
      }
      else{
        this.setState({lock: "images/lock_open.png"});
        alert("Chores Not Saved");
      }
      
      this.setState({isLocked: !this.state.isLocked})

    }
    handleAdd(e){
        alert("Chore Added");

      }
    handleEmoticomment(e){
      alert("Emoticomment Added");
      this.setState({emotionPrompt: true});

    }

    emotionPick(){
      return(<div>Pick an emotion</div>)
    }
    render() {
 

        return (
          <div>
  
          <div className="container-fluid">
          <br/>
          <br/>
        
          </div>
          
          <div className="container-fluid text-center" id="listContainer">
          <div className="container">
          <img className="text-right" style={{width: "60px", float:"left"}} onClick={this.handleEmoticomment.bind(this)} src="svg/comment.svg"></img>
          <img className="" style={{width: "60px"}} onClick={this.handleLock.bind(this)} src={this.state.lock}></img>
          <img className="text-right" style={{width: "60px", float:"right"}} onClick={this.handleAdd.bind(this)} src="svg/add.svg"></img>
          </div> 

            <div className="container" id="nestedListContainer">
            <SortableList lockAxis={"y"}
            pressDelay={200}
            items={this.state.items} onSortEnd={this.onSortEnd} />
            </div>
          </div>
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