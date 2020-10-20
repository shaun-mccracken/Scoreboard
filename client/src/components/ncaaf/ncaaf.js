import React, { Component } from 'react';

class Ncaaf extends Component {

  gameState = this.props.status.type.name;

  upcoming_game_info = {
    name: this.props.name,
    date: this.props.date,
    broadcasts: this.props.competitions[0].broadcasts,
    away_abbreviation: this.props.competitions[0].competitors[1].team.abbreviation,
    away_display_name: this.props.competitions[0].competitors[1].team.displayName,
    away_record: this.props.competitions[0].competitors[1].records[0].summary,
    away_logo_url: this.props.competitions[0].competitors[1].team.logo,
    home_abbreviation: this.props.competitions[0].competitors[0].team.abbreviation,
    home_display_name: this.props.competitions[0].competitors[0].team.displayName,
    home_record: this.props.competitions[0].competitors[0].records[0].summary,
    home_logo_url: this.props.competitions[0].competitors[0].team.logo,
    game_spread: this.props.competitions[0].odds[0].details,
    game_ou: this.props.competitions[0].odds[0].overUnder
  }




  render() {


    //UPCOMING GAME
    if (this.gameState === "STATUS_SCHEDULED") {
      return (

        <div className='game-upcoming'>


          <h2>{this.upcoming_game_info.name}</h2>
          <p>{this.upcoming_game_info.date}</p>
          <div>

            {this.upcoming_game_info.broadcasts.length === 0 ? (
              <p>No broadcasts...</p>
            ):(
              <p>{this.upcoming_game_info.broadcasts[0].names}</p>
            )}
          </div>

          {/*away abbreviation */}
          <p>{this.upcoming_game_info.away_abbreviation}</p>
          <p>{this.upcoming_game_info.away_display_name}</p>

          {/*away record */}
          <p>{this.upcoming_game_info.away_record}</p>

          {/*away logo */}
          <img src={this.upcoming_game_info.away_logo_url} alt="logo" />



          {/*home abbreviation */}
          <p>{this.upcoming_game_info.home_abbreviation}</p>
          <p>{this.upcoming_game_info.home_display_name}</p>

          {/*home record */}
          <p>{this.upcoming_game_info.home_record}</p>

          {/*home logo */}
          <img src={this.upcoming_game_info.home_logo_url} alt="logo" />

          {/*betting info*/}
          <h3>ODDS</h3>
          <p>Spread: {this.upcoming_game_info.game_spread}</p>
          <p>O/U: {this.upcoming_game_info.game_ou}</p>

        </div>
      )
    }





    //LIVE GAME
    if (this.gameState === "STATUS_IN_PROGRESS" || this.gameState === "STATUS_HALFTIME") {

      const isHalf = false;
      if (this.gameState === "STATUS_HALFTIME") {
        this.isHalf = true;
      }

      return (
        <div className='game-live'>

          {/*render differently based on state of game*/}

          {this.isHalf ? (

            <div>
              <h3>{this.props.name} (Half)</h3>
              <p>{this.props.competitions[0].competitors[0].team.abbreviation}: {this.props.competitions[0].competitors[0].score}</p>
              <p>{this.props.competitions[0].competitors[1].team.abbreviation}: {this.props.competitions[0].competitors[1].score}</p>



              {/*Show scoring lines for each quarter*/}

              <h3>Box Score:</h3>
              <div>
                <p>Away Team:</p>
                {
                  this.props.competitions[0].competitors[1].linescores.map((q =>
                  <p>{q.value}</p>
                ))
                }
              </div>

              <div>
                <p>Home Team:</p>
                {
                  this.props.competitions[0].competitors[0].linescores.map((q =>
                  <p>{q.value}</p>
                ))
                }
              </div>
            </div>


            ) : (

            <div>
              <h2>{this.props.name}</h2>
              <p>Quarter: {this.props.competitions[0].status.period}</p>
              <p>Time: {this.props.competitions[0].status.displayClock}</p>

              <br></br>

              <h4>{this.props.competitions[0].competitors[1].team.abbreviation}:</h4>
              <p>ID: {this.props.competitions[0].competitors[1].id}</p>
              <p>Score: {this.props.competitions[0].competitors[1].score}</p>
              <p>Timeouts: {this.props.competitions[0].situation.awayTimeouts}</p>

              <br></br>

              <h4>{this.props.competitions[0].competitors[0].team.abbreviation}:</h4>
              <p>ID: {this.props.competitions[0].competitors[0].id}</p>
              <p>Score: {this.props.competitions[0].competitors[0].score}</p>
              <p>Timeouts: {this.props.competitions[0].situation.homeTimeouts}</p>

              <br></br>

              <h4>Game Details:</h4>
              <p>Possession team ID: {this.props.competitions[0].situation.possession}</p>
              <p>Down: {this.props.competitions[0].situation.down}</p>
              <p>Distance: {this.props.competitions[0].situation.distance}</p>
              <p>Down & Distance Description: {this.props.competitions[0].situation.downDistanceText}</p>
              <p>Last Play Text: {this.props.competitions[0].situation.lastPlay.text}</p>
              <p>Last Play ID: {this.props.competitions[0].situation.lastPlay.id}</p>
            </div>
          )}

        </div>
      )
    }




    //FINISHED GAME
    if (this.gameState === "STATUS_FINAL") {
      return (
        <div className='game-final'>
          <h3>{this.props.name} (Final)</h3>
          <p>{this.props.competitions[0].competitors[0].team.abbreviation}: {this.props.competitions[0].competitors[0].score}</p>
          <p>{this.props.competitions[0].competitors[1].team.abbreviation}: {this.props.competitions[0].competitors[1].score}</p>



          {/*Show scoring lines for each quarter*/}

          <h3>Box Score:</h3>
            <div>
              <p>Away Team:</p>
              {
                this.props.competitions[0].competitors[1].linescores.map((q =>
                <p>{q.value}</p>
              ))
              }
            </div>

            <div>
              <p>Home Team:</p>
              {
                this.props.competitions[0].competitors[0].linescores.map((q =>
                <p>{q.value}</p>
              ))
              }
            </div>
          </div>
      )
    }



    //POSTPONED GAME
    if (this.gameState === "STATUS_POSTPONED") {
      return (
        <div className='game-postponed'>
          <p>{this.props.competitions[0].competitors[1].team.abbreviation} vs. {this.props.competitions[0].competitors[0].team.abbreviation}: Game postponed!</p>
        </div>
      )
    }


    //NONE OF THE CASES HIT (CORNER CASE)
    else {
      return (
        <p>Can't parse game info...</p>
      )
    }
  }
}

export default Ncaaf;
