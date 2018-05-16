import React, { Component } from 'react';
import './App.css';
import './ProfilUser.js'
import ProfilUser from './ProfilUser.js';
import Navbar from './components/Navbar.js'

class App extends Component {
  render() {
    return (
      <div>
        <ProfilUser/>
      </div>
    );
  }
}

export default App;
