import React, {Component} from 'react';
import './css/Navbar.css'
import './css/escort.css'
import './css/profile.css'

const createCharacterElement = character => {
    return (
        <div className="escort-canvas">
            <a
                className="character" href="profile.html?id==={character.id}">
                <div className="character-infos">
                    <div className="character-img"><img src={character.image}/>
                    </div>
                    <div className="character-name"><p>{character.name}</p></div>
                </div>
            </a>
        </div>
    )
}

// const render = characters => {
// characters.map(createCharacterElement).join('')} // style={{marginRight:
// spacing + 'em'}}
// fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
// .then(res => res.json())   .then() export default All

const API = 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json';

class All extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    async componentDidMount() {
        const response = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
        const json = await response.json()
        this.setState({data: json})
    }

    render() {
        return (
            <div> {this.state.data.map(createCharacterElement)}
            </div>
        )
    }

    // const All = ({char}) => {
    //     if (char.length === 0) {
    //         return <div>Loading Results</div>
    //     }

    //     return <div>{char.map(createCharacterElement)}</div>
    }

    export default All
