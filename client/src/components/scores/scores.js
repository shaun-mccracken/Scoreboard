import React, { Component } from 'react';


//import all game types here
import Ncaaf from '../ncaaf/ncaaf';
import Nfl from '../nfl/nfl';


class Scores extends Component {

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
    const url = "http://site.api.espn.com/apis/site/v2/sports/"+ this.props.sport + "/" + this.props.league + "/scoreboard";
    const response = await fetch(url);

    const data = await response.json();
    this.setState({games: data.events, loading: false});
    console.log(data);
  }


  render() {

    if (this.props.league === "college-football") {

      return (
        <div>
          {this.state.loading || !this.state.games ? (
            <div>Loading...</div>
            ) : (
            <div>
              {
                this.state.games.map((game =>
                  <Ncaaf key={game.id} {...game} />
                ))
              }
            </div>
          )}

        </div>

      )

    }

    if (this.props.league === "nfl") {

      return (
        <div>
          {this.state.loading || !this.state.games ? (
            <div>Loading...</div>
            ) : (
            <div>
              {
                this.state.games.map((game =>
                  <Nfl key={game.id} {...game} />
                ))
              }
            </div>
          )}

        </div>

      )

    }
  }
}

export default Scores;
