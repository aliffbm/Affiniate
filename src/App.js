import React, { Component } from 'react';
//import ReactDom from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import '../public/css/introHCI.css';

//import {Link} from 'react-router';
//import Header from './header.js';
//import navi from './Navigation/nav.js';
import Navigation from './Navigation/nav.js';

import LogInOverLay from './pages/loginOverLay.js';
import Footer from './pages/footer.js';
import ListItem from './pages/choresP.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      isloggedIn: false,
      showLogin: false
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
    let navBar = <Navigation changeLoginState={this.changeLoginState.bind(this)}/>;
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


      <Footer/>
      




      </div>
    );
  }
}

export default App;
