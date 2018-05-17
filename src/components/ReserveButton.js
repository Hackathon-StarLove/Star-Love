import React, {Component} from 'react';

class Reserve extends Component {

  click() {
    alert();
  }
  render() {
    return(
      <button onClick={this.click.bind(this)}>
        {this.props.name}
      </button>



      )
  }
}

export default Reserve
