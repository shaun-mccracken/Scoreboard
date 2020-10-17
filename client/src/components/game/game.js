import React, { Component } from 'react';

class Game extends Component {

  render() {
    return (
      <div className='game-box'>
        <h2>{this.props.name}</h2>
        <p>{this.props.date}</p>
      </div>
    )
  }
}

export default Game;
