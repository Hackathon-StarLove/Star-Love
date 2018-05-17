import React, { Component } from 'react'
import Title from './Title.js'
import All from './All.js'

const EscortContainer = ({char}) => {
return <div className="container">
<Title text="Find your intergalatic escort"/>
<div className="escort-all">
<All value={char}/>
</div>
</div>
}

export default EscortContainer 