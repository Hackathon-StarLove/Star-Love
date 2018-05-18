import React, { Component } from 'react';
import './css/Navbar.css'
import './css/escort.css'
import './css/profile.css'
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import UserProfil from './UserProfile.js'

const createCharacterElement = character => {
    return (
        <div className="escort-canvas">
            <a
                className="character">
                <div className="character-infos">
                    <div className="character-img"><img src={character.image} />
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

class All extends Component {
    state = {
        data: [],
        open: false,
    };

    onOpenModal = () => {
      this.setState({ open: true });
    };

    onCloseModal = () => {
      this.setState({ open: false });
    };


    async componentDidMount() {
        const response = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
        const json = await response.json()
        this.setState({ data: json })
    }

    render() {
        const {open} = this.state;
        return (
            <div>
                <div onClick={this.onOpenModal}>
                    {this
                        .state
                        .data
                        .map(createCharacterElement)}</div>
                <div>
                    <Modal open={open} onClose={this.onCloseModal} classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                        <div><UserProfil/></div>
                    </Modal>
                </div>
            </div>
        )
    }
}

// class All extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data: []
//         };
//     }
    

class Selection extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    async componentDidMount() {
        const response = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
        const json = await response.json()
        this.setState({ data: json })
    }

    render() {
        return (
            <div> {this.state.data.slice(0,16).map(createCharacterElement)}
            </div>
        )
    }

}

export { All, Selection }