import React from 'react';
import './App.css';
import Scores from './components/scores';
//import ReactDOM from "react-dom";
import {
  BrowserRouter as Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/ncaaf">
          <Scores sport="football" league="college-football"/>
        </Route>
        <Route path="/nfl">
          <Scores sport="football" league="nfl"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
