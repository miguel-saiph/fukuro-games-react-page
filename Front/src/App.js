import React, { Component} from "react";
import "./App.css";

import Game from './components/Game';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Game />
      </div>
    );
  }
}

export default App