import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar.js'
// import EscortContainer from './components/EscortContainer.js'
// import BasicExample from './components/Backend.js'
import Title from './components/Title.js'
import All from './components/Routes.js'

class App extends Component {
  state = {
    data: [],
    test: ''
  }
  async componentDidMount() {
    const response = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
    const json = await response.json()
    this.setState({ data: json })
    const response1 = await fetch('http://localhost:3030')
    const json1 = await response1.json()
    this.setState({ test: json1 })
  }

  render() {
	console.log(this.state.data)
	console.log(this.state.test)
    return (
      <div className="App">
        <Navbar />
        <Title text="Find your intergalatic escort"/>
        {/* <EscortContainer /> */}
        {/* <BasicExample /> */}
        <All char={this.state.data} />
      </div>
    );
  }
}

export default App
