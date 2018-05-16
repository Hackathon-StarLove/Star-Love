import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar.js'
import EscortContainer from './components/EscortContainer.js'
import BasicExample from './components/Backend.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Title />
        <EscortContainer />
        <BasicExample />
      </div>
    );
  }
}



export default App
