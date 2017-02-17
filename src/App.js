import React, { Component } from 'react';
//import ReactDom from 'react-dom';
//import logo from './logo.svg';
import './App.css';

import {Link} from 'react-router';
//import Header from './header.js';
//import navi from './Navigation/nav.js';
import UserNavigation from './Navigation/nav.js';
import WelcomeNavigation from './Navigation/navWelcomPage.js';
import LogInOverLay from './pages/loginOverLay.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      login: false
    }

  }

  changeLoginState(login){
    this.setState({login: {login}});
  }



  render() {
    let navPage;
    let brand;

     if(!this.state.login){
      navPage =<div> <WelcomeNavigation showLogin=""/>
      <LogInOverLay changeLoginState={this.changeLoginState.bind(this)}/></div>;
    
    }else{
      navPage = <UserNavigation/>;
    }
   

    return (<div>
     {navPage}
      {this.props.children}
      




      </div>
    );
  }
}

export default App;
