import React, {Component} from 'react'
import './css/Navbar.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ProfilUser from './ProfilUser.js'
import Reserve from './ReserveButton.js'

const Navbar = (props) => {
    return (
        <Router>
			<div>
        <nav>
            <div className="logo"><Link to="/"><img src="http://via.placeholder.com/130x80" alt="Logo"/></Link></div>
            <div className="nav-item">
                <ul>
                    <li>
                        <Link to="/escorts"><img src="http://via.placeholder.com/70x70" alt="Escorts book"/><p>Escorts book</p> </Link>
                    </li>

                    <li>
					<Link to="myprofil"> <img src="http://via.placeholder.com/70x70" alt="My profile"/>  <p>My profile</p> </Link>
                    </li>

                    <li>
                        <img src="http://via.placeholder.com/70x70" alt="My reservations"/>
                        <p>My reservations</p>
                    </li>

                    
                </ul>
				
            </div>
            <div className="logout">

                <img src="http://via.placeholder.com/40x40" alt="Log out"/>
                <p>Log out</p>
           
        </div>
		
    </nav> 
	<Route exact path="/escorts" component={ProfilUser}/>
	<Route exact path="/myprofil" component={ProfilUser}/>
	</div>
	</Router>
    ) 
}

// return <Router>

// {/ * <div>
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/test">Profil User</Link>
//                 </li>
//                 <li>
//                     <Link to="/escorts">Escort book</Link>
//                 </li>
//                 <Route path="/test" component={ProfilUser}/>
//                 <Route path="/escorts" component={Reserve}/>
//             </ul>
//         </nav>
//     </div> * /
//     // } < /Router >
export default Navbar