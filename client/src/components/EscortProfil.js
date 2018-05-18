// import React, {Component} from 'react';

// class EscortProfil extends Component {
//     constructor() {
//         super()
//         this.state = {
//             pictures: []
//         }
//     }

//     componentDidMount() {
//         fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/1.json').then(result => {
//             return result.json()
//         }).then(pic => {
//                 console.log('pic', pic.image)
//                 let pictures = (
//                     <div className="imgContainer" key={pic.id}>
//                         <img className="starImg" src={pic.image} alt="alt"/>
//                         <div>{pic.name}</div>
//                     </div>
//                 )
//             this.setState({pictures: pictures})
//             console.log("state", this.state.pictures)
            
//         })
//     }
//     render() {
//         return (
//             <div className="starList">
//                 {this.state.pictures}
//             </div>
//         )

//     }

// }

// /*  {pictures.map((pict) => (
//             <img className="characters" src={pict.image} alt = "alt"/>
//           ))}<div className="characters" style = {backgroundImage ={`url(${pict.image})`}} >*/

// export default EscortProfil


import React, {Component} from 'react';


class EscortProfil extends Component {
  constructor(){
    super()
      this.state = {
        pictures:[]
      }
    }

  componentDidMount() {
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(result => {
        return result.json()
      })
      .then(data => {

        let pictures= data.map((pic) => {
          console.log('pic',pic.image)
          return (
            <div className="imgContainer" key={pic.id}>
              <img className= "starImg" src={pic.image} alt="alt"/>
            </div>
          )
        })
        
        this.setState({pictures:pictures})
        console.log("state", this.state.pictures)
      })
  }
  render () {
      return (
        <div className="starList">
          {this.state.pictures[5]}
        </div>
        )

          }    
    
      
    }
  

      /*  {pictures.map((pict) => (
            <img className="characters" src={pict.image} alt = "alt"/>
          ))}<div className="characters" style = {backgroundImage ={`url(${pict.image})`}} >*/   

export default EscortProfil
