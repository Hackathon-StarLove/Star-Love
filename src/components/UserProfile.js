import React, {Component} from 'react';
import User from './user.js'
import MainPanel from './MainPanel.js'
import './css/profile.css'


export class UserProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={User} />
      </div>
    )
  }
}

export default UserProfile
