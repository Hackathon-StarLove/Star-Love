import React, {Component} from 'react'
import './App.css'
// import Navbar from './components/Navbar.js'
import UserProfil from './components/UserProfile.js'
import Reserve from './components/ReserveButton.js'
// import BasicExample from './components/Backend.js'
import Title from './components/Title.js'
import EscortContainer from './components/EscortContainer.js'
import './components/css/Navbar.css'
import './components/css/escort.css'
import './components/css/profile.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './img/star-love-02.png'
import escortbook from './img/star-love-04.png'
import myprofile from './img/star-love-03.png'
import reservation from './img/star-love-05.png'
import logout from './img/star-love-06.png'

class App extends Component {
    state = {
        data: [],
        test: ''
    }
    async componentDidMount() {
        const response = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
        const json = await response.json()
        this.setState({data: json})
        const response1 = await fetch('http://localhost:3030')
        const json1 = await response1.json()
        this.setState({test: json1})
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="Logo"/></Link>
                        </div>
                        <div className="nav-item">
                            <ul>
                                <li>
                                    <Link to="/escorts"><img src={escortbook} alt="Escorts book"/>
                                        <p>Escorts book</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="myprofil">
                                        <img src={myprofile} alt="My profile"/>
                                        <p>My profile</p>
                                    </Link>
                                </li>
                                <li>
								<Link to="reservation">
                                    <img src={reservation} alt="My reservations"/>
                                    <p>My reservations</p>
									</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="logout">
                            <img src={logout} alt="Log out"/>
                            <p>Log out</p>
                        </div>
                    </nav>
                    <Route path="/escorts" component={EscortContainer} char={this.state.data}/>
                    <Route exact path="/myprofil" component={UserProfil}/>
					<Route exact path="/reservation" component={UserProfil}/>
                </div>
            </Router>
        )
    }
}

export default App