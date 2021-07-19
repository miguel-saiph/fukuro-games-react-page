import React, { Component} from "react";
import "./App.css";

import Header from './components/header/Header'
import Game from './components/Game';
import Content from './components/content/Content'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <h1> Hello, World! </h1>
        <Content />
        <Game />
      </div>
    );
  }
}

export default App