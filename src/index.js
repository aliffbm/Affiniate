import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/bootstrap.css';
import '../public/css/bootstrap-theme.css';
import navbarInstance from './Navigation/nav.js';
//import App from './App';
//import NavBox from './Navigation/components';
import './index.css';




ReactDOM.render(
  navbarInstance,
  document.getElementById('root')
);