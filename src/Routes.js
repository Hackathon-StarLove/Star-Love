import React from 'react';

const render = characters => {
    const characterElements = characters
        .map(createCharacterElement)
        .join('')
}

const all, e => {
    fetch('http://localhost:3030/characters')
        .then(res => res.json())
        .then(render)
}
