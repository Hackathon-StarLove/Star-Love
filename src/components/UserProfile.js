import React, {Component} from 'react';
import user from './user.js'
import MainPanel from './MainPanel.js'


export class UserProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user} />
      </div>
    )
  }
}

export default UserProfile
