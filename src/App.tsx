import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/Navigation";
import AboutPage from "./Pages/ContactPage";
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
      <Navigation />
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
