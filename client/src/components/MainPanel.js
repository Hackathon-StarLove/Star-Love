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
            <h2>{info.name}</h2>
            <Avatar
               image={info.photo}
               width={100}
               height={100}
            />
            <p>{info.gender} | {info.birthday}</p>
        <div className="bottom">
          <h4>Description</h4>
          <p>{info.bio}</p>
        </div>

          <hr />
        </div>

      </div>
    );
  }
}


export default MainPanel

