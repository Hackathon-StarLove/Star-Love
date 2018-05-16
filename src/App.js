import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar.js'
import EscortContainer from './components/EscortContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <EscortContainer />
        <ProfilUser/>
      </div>
    );
  }
}

export default App
