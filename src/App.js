import React, { Component } from 'react';
//import ReactDom from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import '../public/css/introHCI.css';

//import {Link} from 'react-router';
//import Header from './header.js';
//import navi from './Navigation/nav.js';
import UserNavigation from './Navigation/nav.js';
import WelcomeNavigation from './Navigation/navWelcomPage.js';
import LogInOverLay from './pages/loginOverLay.js';
import Footer from './pages/footer.js';
class App extends Component {
  constructor(){
    super();
    this.state = {
      login: false,
      showLogin: false
    };

  }

  changeLoginState(login){
    this.setState({login: {login}});
  }

  showLogin(){
    this.setState({showLogin: !this.state.showLogin});
  }


  render() {
    let navPage;
    let brand;
    let showLoginElem;

    if(this.state.showLogin){
      showLoginElem = <div><LogInOverLay id="logInOL" changeLoginState={this.changeLoginState.bind(this)}/></div>;
    }else{
      showLoginElem = <div></div>;
     
    }
    if(!this.state.login){
      navPage =<div>
                  <WelcomeNavigation showLogin={this.showLogin.bind(this)} />
                  {showLoginElem}
                </div>
    
    }else{
      navPage = <UserNavigation/>;
    }
   

    return (<div>
     {navPage}
 
      {this.props.children}

      <Footer/>
      




      </div>
    );
  }
}

export default App;
