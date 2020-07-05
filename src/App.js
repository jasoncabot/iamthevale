import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import signalr from './signalr';

import Home from './Home';
import About from './About';
import StoryList from './StoryList';

import './App.css';

const App = () => {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const makeConnection = async () => {
      setConnection(await signalr.connect());
    };
    if (!connection) {
      makeConnection();
    }
    return () => {
      if (!connection) return;
      connection.close();
    }
  }, [connection]);

  return (
    <Router>
      <header className="masthead mb-sm">
        <div className="inner">
          <nav className="nav nav-masthead justify-content-center">
            <NavLink to="/" exact className="nav-link">Home</NavLink>
            <NavLink to="/latest" exact className="nav-link">Latest</NavLink>
            <NavLink to="/about" exact className="nav-link">About</NavLink>
          </nav>
        </div>
      </header>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/latest">
          <StoryList kind="latest" connection={connection} />
        </Route>
        <Route path="/">
          <Home connection={connection} />
        </Route>
      </Switch>

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p className="text-muted">A digital inclusion project made with <span role="img" aria-label="love">❤️</span></p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
