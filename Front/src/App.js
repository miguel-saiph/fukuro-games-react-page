import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import "./App.css";

import Header from './components/header/Header'
// import Game from './components/Game';
import Content from './components/content/Content'

class App extends Component{
  render(){
    return(
      <Router>
        <Header />

        <Switch>
          <Route path="/games">
            {/* <Game /> */}
            <h1> Hello, Games </h1>
          </Route>
          <Route path="/">
            <h1> Hello, World! </h1>
            <Content />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App