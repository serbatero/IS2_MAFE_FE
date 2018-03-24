import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Componets
import Header from './components/Header.js';
import Slider from './components/Slider.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default App;
