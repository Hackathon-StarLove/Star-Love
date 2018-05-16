import React, {Component} from 'react'
import Avatar from './Avatar.js'
import './css/profile.css'


export class MainPanel extends React.Component {
  render() {
    const info = this.props.info;
    if (!info) return null;

    return (
     <div>
        <div className="top">
            <Avatar
               image={info.photo}
               width={100}
               height={100}
            />
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>

          <hr />
            <p>{info.gender} | {info.birthday}</p>
        </div>

        <div className="bottom">
          <h4>Biography</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}


export default MainPanel
