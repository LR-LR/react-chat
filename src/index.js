import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(<div>Hello world !</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
