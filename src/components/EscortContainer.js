import React, { Component } from 'react'
import Escort from './Escort.js'
import './css/escort.css'
import MainTitle from './MainTitle.js'

const EscortContainer = (props) => {
    return <div className="container">
        <MainTitle />
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