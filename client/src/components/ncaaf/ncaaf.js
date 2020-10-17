import React, { Component } from 'react';
import Game from '../game/game';

class Ncaaf extends Component {

  state = {
    loading: true,
    games: null
  };


  /*

  Other links:


  College football:
  http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard


  College basketball:
  http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard


  College baseball:
  http://site.api.espn.com/apis/site/v2/sports/baseball/college-baseball/scoreboard


  College softball:
  http://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard

  WNBA:
  http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard


  NBA:
  http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard

  MLB:
  http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard

  College Sports:
  http://www.espn.com/college-sports/scoreboard








  */



  async componentDidMount() {
    const url = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard';
    const response = await fetch(url);

    const data = await response.json();
    this.setState({games: data.events, loading: false});
    console.log(data);
  }


  render() {

    return (
      <div>
        {this.state.loading || !this.state.games ? (
          <div>Loading...</div>
          ) : (
          <div>
            {
              this.state.games.map((game =>
              <Game key={game.id} {...game} />
            ))
            }
          </div>
        )}

      </div>

    )
  }

}

export default Ncaaf;
