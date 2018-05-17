import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Avatar from './components/Avatar.js'
// import user from './components/user.js
import UserProfile from './components/UserProfile.js'
import MainPanel from './components/MainPanel.js'
import Reserve from './components/ReserveButton.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Avatar />
      <MainPanel />
      <UserProfile />
      <Reserve name="Reserver"/>
      </div>

    );
  }
}




export default App;
