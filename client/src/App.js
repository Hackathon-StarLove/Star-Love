import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';


import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import UserProfil from './components/UserProfile.js'
import Reserve from './components/ReserveButton.js'
import Title from './components/Title.js'
import { EscortContainer, SelectionContainer } from './components/EscortContainer.js'
// import Modal from './components/Modal.js'
import './App.css'
import './components/css/Navbar.css'
import './components/css/escort.css'
import './components/css/profile.css'
import logo from './img/logo.png'
import escortbook from './img/star-love-04.png'
import myprofile from './img/star-love-03.png'
import reservation from './img/star-love-05.png'
import logout from './img/star-love-07.png'


class App extends Component {
    state = {
        data: [],
        test: '',
    };

    async componentDidMount() {
        const response = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
        const json = await response.json()
        this.setState({data: json})
        const response1 = await fetch('http://localhost:3030')
        const json1 = await response1.json()
        this.setState({test: json1})
    }

    render() {
          const { open } = this.state;
        return (
            <Router>
                <div className="App">
                    <nav>
                        <div className="logo">
                            <Link to="/">
                        <img src={logo} alt="Logo"/>
                        </Link>
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
                    <Route exact path="/" component={SelectionContainer} char={this.state.data}/>
                    <Route exact path="/escorts" component={EscortContainer} char={this.state.data}/>
                    <Route exact path="/myprofil" component={UserProfil}/>
					<Route exact path="/reservation" component={UserProfil}/>
                </div>
            </Router>
        )
    }
}

export default App
