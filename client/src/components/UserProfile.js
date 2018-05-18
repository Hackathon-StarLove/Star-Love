import React, {Component} from 'react'
import Title1 from './Title1.js'

const UserProfile = ({char}) => {
    return <div className="container">
        <Title1 text="My Profile"/>
        <div className="User">
            <button className="Edit">
                Edit
            </button>
        </div>
        <div>

            <div className="flex-container">
                <div>
                    <img className="ProfilePic" src="http://via.placeholder.com/250x250"/>

                </div>
                <div>
                    <p>Name: <span className="response-user">Jane Doe</span></p>
                    <p>Gender: <span className="response-user">Female</span></p>
                    <p>Age: <span className="response-user">24</span></p>
                    <p>Affiliation: <span className="response-user">Empire</span></p>
                </div>
            </div>
            <div className="Description"><h3>Description</h3><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>
        </div>
    </div>
}

export default UserProfile