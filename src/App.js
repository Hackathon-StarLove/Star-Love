import React, {Component} from 'react'
import './App.css'
import Navbar from './components/Navbar.js'
//import EscortContainer from './components/EscortContainer.js'
import ProfilUser from './components/ProfilUser.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <ProfilUser/>
              
            </div>
        );
    }
}

export default App
