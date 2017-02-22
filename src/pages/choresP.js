import React, {Component} from 'react';
//import {render} from 'react-dom';

import Data from '../data.json';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

var choreItems =[];
for(var i=0;i<Data[1].chores.length;i++){
  choreItems[i] = Data[1].chores[i];
}
console.log("Im a negro");
console.log(choreItems);


const SortableItem = SortableElement(({value}) => <div>{value}</div>);

const SortableList = SortableContainer(({items}) => {
    return (
        <div>
          <ul>
            {items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )}
          </ul>
        </div>
    );
});

export default class choresP extends Component {
    state = {
        items: [choreItems[0].name, choreItems[1].name, choreItems[2].name, choreItems[3].name]
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    };
    render() {
        return (
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        )
    }
}




