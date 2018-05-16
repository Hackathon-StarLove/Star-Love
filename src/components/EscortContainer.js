import React, { Component } from 'react'
import Escort from './Escort.js'
import './css/escort.css'

const EscortContainer = (props) => {
    return <div className="container">
        <h1>Find your intergalactic escort</h1>
        <Escort />
        <Escort />
        <Escort />
        <Escort />
    </div>
}

export default EscortContainer