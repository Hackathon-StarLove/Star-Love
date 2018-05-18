import React, { Component } from 'react'
import './css/Navbar.css'
import './css/escort.css'
import './css/profile.css'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'
import EscortProfil from './EscortProfil'

const CreateCharacterElement = props => {
    return (
        <div key={props.id} className="escort-canvas">
            <a onClick={props.openModal}
                className="character">
                <div className="character-infos">
                    <div className="character-img">
                        <img src={props.image} />
                    </div>
                    <div className="character-name"><p>{props.name}</p></div>
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
    }

    openModal = () => {
        console.log(333)
        this.setState({ open: true })
    }

    onCloseModal = () => {
        this.setState({ open: false })
    }

    async componentDidMount() {
        const response = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
        const json = await response.json()
        this.setState({ data: json })
    }
    
    render() {
        return <React.Fragment>
            {this.state.data.map(c => CreateCharacterElement({
                ...c,
                openModal: this.openModal,
            }))}
            <Modal open={this.state.open} onClose={this.onCloseModal} classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                <div>
                <img src={this.state.data.image} />
                </div>
            </Modal>
        </React.Fragment>
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
            <div>
                {this.state.data.slice(0,16).map(CreateCharacterElement)}
            </div>
        )
    }

}

export { All, Selection }