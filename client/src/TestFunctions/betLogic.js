
//sample NFL game data
const data = {
  home_score: 24,
  away_score: 21,
  spread: 3.5,
  favored_team: "home",
  over_under: 45.5
}



function betOutcome(data) {

  //SPREAD LOGIC

  //home team was favored
  if (data.favored_team === "home") {
    home_win_margin = data.home_score - data.away_score;
    console.log("Home team covered: "+(home_win_margin > data.spread));
    if (home_win_margin === data.spread) {
      console.log("Home team pushed");
    }
  }


  //away team was favored
  else if (data.favored_team === "away") {
    away_win_margin = data.away_score - data.home_score;
    console.log("Away team covered: "+(away_win_margin > data.spread));
    if (away_win_margin === data.spread) {
      console.log("Away team pushed");
    }
  }

  //neither team favored (pick em)
  else {
    console.log("Neither team was favored");
    if (data.home_score - data.away_score != 0) {
      highest_score = Math.max(data.home_score, data.away_score);
      if (data.home_score === highest_score) {
        console.log("Home team covered");
      }
      else if (data.away_score === highest_score) {
        console.log("Away team covered");
      }
    }

    else {
      console.log("Push (game ended in a tie)");
    }
  }



  //OVER UNDER LOGIC

  total = data.home_score + data.away_score;
  if (total > data.over_under) {
    console.log("Over");
  }
  else if (total < data.over_under) {
    console.log("Under");
  }
  else {
    console.log("Push");
  }
}


betOutcome(data);
