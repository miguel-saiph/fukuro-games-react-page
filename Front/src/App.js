import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import "./App.css";

import Header from './components/header/Header'
import Game from './components/Game';
import Content from './components/content/Content'

import CategoryService from './services/CategoryService'

const App = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    CategoryService.getAllCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return(
    <Router>
      <Header categories={categories} />

      <Switch>
        <Route path="/games/:id">
          <h1> Hello, Games </h1>
          <Game />
        </Route>
        <Route path="/">
          <h1> Hello, World! </h1>
          <Content categories={categories} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App