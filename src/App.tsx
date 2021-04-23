import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App()
{
  return (
    <Router>
      <div>
        <Link to="/">Jon St. Denis</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
