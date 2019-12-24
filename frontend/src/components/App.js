import React from 'react';
import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Design} from './Pages/Design'
import {Admin} from './Pages/Admin'
import {Maintenance} from './Pages/Maintenance'
import {Stock} from './Pages/Stock'
import {Security} from './Pages/Security'
import {About} from './Pages/About'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/maintenance">Maintenance</Link>
          </li>
          <li>
            <Link to="/stock">Stock</Link>
          </li>
          <li>
            <Link to="/security">Security</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Admin />
          </Route>
          <Route path="/admin">
            <Admin /> 
          </Route>
          <Route path="/maintenance">
            <Maintenance />
          </Route>
          <Route path="/stock">
            <Stock />
          </Route>
          <Route path="/security">
            <Security />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}


export default App;
