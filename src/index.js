import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/bootstrap.css';
import '../public/css/bootstrap-theme.css';
import navbarInstance from './Navigation/nav.js';
import Chores from './chores/chores.js';
import './index';

var Index = React.createClass({
  render(){
    return <div>
      <Chores/>
    </div>;
  }
});

ReactDOM.render(<Index />, document.querySelector('main'));
