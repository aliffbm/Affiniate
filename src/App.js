import React, { Component } from 'react';

import './App.css';
import '../public/css/introHCI.css';

import Navigation from './Navigation/nav.js';

import LogInOverLay from './pages/loginOverLay.js';

import ListItem from './pages/choresP.js';
//import Fetch from '../../node_modules/react-fetch/build/react-fetch';


class App extends Component {
  constructor(){
    super();
    this.state = {
      isloggedIn: false,
      showLogin: false,
    }
  }

 

  

  changeLoginState(login){
    this.setState({isloggedIn: {login}});
  }

  showLogin(){
    this.setState({showLogin: !this.state.showLogin});
    alert("I was called! !");
  }


 

  render() {
    let navBar = (<Navigation changeLoginState={this.changeLoginState.bind(this)}/>);
    let brand;
    let showLoginElem;

    if(this.state.showLogin){
      showLoginElem = <div><LogInOverLay id="logInOL" showLogin={this.showLogin.bind(this)} changeLoginState={this.changeLoginState.bind(this)}/></div>;
    }else{
      showLoginElem = <div></div>; 
    }
   

    
    return (<div>
     {navBar}

    
{this.props.children}

   </div> );
  }
}

export default App;
