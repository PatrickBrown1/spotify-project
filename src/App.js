import React, { Component } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import DataPage from "./pages/DataPage.js";
import AboutPage from "./pages/AboutPage.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
    
  }

  async componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }
  
  
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <nav>
              <div className="navbar">
                <Link className="navlink" to="/">Home</Link>
                <Link className="navlink" to="/about">About</Link>
                <Link className="navlink" to="/data">Data</Link>
              </div>
            </nav>
            <body>
              <Switch>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="/data">
                  <DataPage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </body>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
