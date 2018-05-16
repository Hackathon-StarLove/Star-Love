import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Avatar from './components/Avatar.js'
// import user from './components/user.js
import UserProfile from './components/UserProfile.js'
import MainPanel from './components/MainPanel.js'
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

      <Avatar />
      <UserProfile />
      <MainPanel />

      </div>

    );
  }
}

export default App;
