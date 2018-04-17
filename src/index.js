// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase'
// Routes
import AppRoutes from './routes';

// Assets
import './index.css';


firebase.initializeApp({
	apiKey: "AIzaSyD4YsB7cophC2mO6vmrvaTXftGEuW3Sj70",
    authDomain: "mafe-app.firebaseapp.com",
    databaseURL: "https://mafe-app.firebaseio.com",
    projectId: "mafe-app",
    storageBucket: "mafe-app.appspot.com",
    messagingSenderId: "504533869340"
})
render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
);
