import React, { Component } from 'react';

class Game extends Component {


  gameState = this.props.status.type.state;


  render() {

    //PREGAME
    if (this.gameState === "pre") {
      return (
        <div className='game-box'>

          <h2>{this.props.name}</h2>
          <p>{this.props.date}</p>

          {/*home abbreviation */}
          <p>{this.props.competitions[0].competitors[0].team.abbreviation}</p>
          <p>{this.props.competitions[0].competitors[0].team.displayName}</p>

          {/*home record */}
          <p>{this.props.competitions[0].competitors[0].records[0].summary}</p>

          <img src={this.props.competitions[0].competitors[0].team.logo} alt="logo" />


        </div>
      )
    }

    //LIVE
    if (this.gameState === "in") {
      return (
        <div className='game-box'>
          <h2>{this.props.name}</h2>
          <p>{this.props.date}</p>
          <p>{this.gameState}</p>
        </div>
      )
    }


    //POSTGAME
    if (this.gameState === "post") {
      return (
        <div></div>
      )
    }

  }
}

export default Game;
