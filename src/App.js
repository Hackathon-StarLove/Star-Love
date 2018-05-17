import React, {Component} from 'react'

import './App.css'
import Avatar from './components/Avatar.js'
// import user from './components/user.js
import UserProfile from './components/UserProfile.js'
import MainPanel from './components/MainPanel.js'
import Reserve from './components/ReserveButton.js'
import Navbar from './components/Navbar.js'
import Title from './components/Title.js'
import All from './components/Routes.js'

class App extends Component {
    state = {
        data: []
    }
    async componentDidMount() {
        const response = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
        const json = await response.json()
        this.setState({data: json})
    }
    render() {
        console.log(this.state.data)
        return (
            <div className="App">
                {/* <Avatar/>
                <MainPanel/>
                <UserProfile/>
                <Reserve name="Reserver"/> */}
                <Navbar/>
                <Title text="Find your intergalatic escort"/> {/* <BasicExample /> */}
                <All char={this.state.data}/>
            </div>
        )
    }
}

export default App