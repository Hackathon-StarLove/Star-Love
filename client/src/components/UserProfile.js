import React, {Component} from 'react'
import Title from './Title.js'

const UserProfile = ({char}) => {
    return <div className="Blop">
        <Title text="My Profil"/>
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
                    <p>Name: Jane Doe</p>
                    <p>Gender: Female</p>
                    <p>Age: 24</p>
                    <p>Affiliation: Empire</p>
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