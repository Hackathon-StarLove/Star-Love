import React from "react"

export const createCharacterElement = character => {

    const isResistant = character
        .affiliations
        .includes('Resistance')

    return ( <div> <a className="character" style={{backgroundImage: `url(${character.pic})`}}
    href="profile.html?id==={character.id}">
        <div className="character-infos">
          <div className="character-name">{character.name}</div>
          <div className="character-github"><img src={character.image} /> </div>
        </div>
        </a>
    </div>)
}
// style={{marginRight: spacing + 'em'}}

const All = ({char}) => {
    if (char.length === 0) {
        return <div>Loading Results</div>
    }

    return <div>{char.map(createCharacterElement)}</div>
}

export default All

// const render = characters => {     const characterElements = characters
// .map(createCharacterElement)         .join('') }