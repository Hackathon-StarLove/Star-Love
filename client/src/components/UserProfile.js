import React, {Component} from 'react'
import Title from './Title.js'

const EscortContainer = ({char}) => {
    return <div className="container">
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
            <div className="Description"><h3>Description</h3><p>dweddeedew</p></div>
        </div>
    </div>
}

export default EscortContainer