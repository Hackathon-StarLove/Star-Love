import React, { Component } from 'react'
import Escort from './Escort.js'
import './css/escort.css'

const EscortContainer = (props) => {
    return <div className="container">
        <Escort />
        <Escort />
        <Escort />
        <Escort />
    </div>
}



export default EscortContainer