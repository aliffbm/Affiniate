import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/bootstrap.css';
import '../public/css/bootstrap-theme.css';
import './index';

/*var Index = React.createClass({
  render(){
    return <div>
      <Chores/>
    </div>;
  }
});
*/

//import $ from 'jquery';

//import navbarInstance from './Navigation/nav.js';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';


//import utilities from './utilities/utilities.js';
//import App from './App';
//import NavBox from './Navigation/components';
import './index.css';
import Home from './pages/home.js';
import Chores from './pages/chores.js';
import Stats from './pages/stats.js';
import App from './App.js';


import brand from './pages/brand.js';





//console.log(data);
ReactDOM.render(  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={brand}></IndexRoute>
  		<Route path="home" component={Home}></Route>
  		<Route path="chores" component={Chores}></Route>
      <Route path="stats" component={Stats}></Route>
  	</Route>
  </Router>
,
  document.getElementById('root')
);

