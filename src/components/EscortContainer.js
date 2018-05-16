import React, { Component } from 'react'
import Escort from './Escort.js'
import './css/escort.css'

const EscortContainer = (props) => {
    return <div className="container">
        <div className="escort-list">
            <Escort />
            <Escort />
            <Escort />
            <Escort />
            <Escort />
            <Escort />
        </div>
    </div>
}

export default EscortContainer