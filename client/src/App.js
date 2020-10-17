import React from 'react';
import './App.css';
import Nfl from './components/nfl';
import Ncaaf from './components/ncaaf';
//import ReactDOM from "react-dom";
import {
  BrowserRouter as Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/nfl">
          <Nfl />
        </Route>
        <Route path="/ncaaf">
          <Ncaaf />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
