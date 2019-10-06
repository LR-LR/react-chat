import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';
import './index.css';
import Login from './Login/login';
import * as serviceWorker from './serviceWorker';
import Signup from './Signup/signup';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyBWnJHpuplBs8wVe88ypNB1GPI3wAPikwg',
  authDomain: 'lr-chat-react.firebaseapp.com',
  databaseURL: 'https://lr-chat-react.firebaseio.com',
  projectId: 'lr-chat-react',
  storageBucket: 'lr-chat-react.appspot.com',
  messagingSenderId: '799868362297',
  appId: '1:799868362297:web:2fb8dfe62aa827d65137e8',
  measurementId: 'G-V766V8TQBS'
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
