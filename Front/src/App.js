import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import "./App.css";

import Header from './components/header/Header'
import Game from './components/Game';
import Content from './components/content/Content'
import CategoryFull from './components/content/CategoryFull'

import CategoryService from './services/CategoryService'
import GamesService from './services/GamesService'

const App = () => {

  const [categories, setCategories] = useState([])
  const [games, setGames] = useState([])

  useEffect(() => {
    CategoryService.getAllCategories().then((categories) => {
      setCategories(categories)
    })
    GamesService.getAllGames().then((games) => {
      setGames(games)
    })
  }, [])

  return(
    <Router>
      <Header categories={categories} />

      <Switch>
        <Route path="/games/:id">
          <Game />
        </Route>
        <Route path="/:category">
          <CategoryFull categories={categories} games={games} />
        </Route>
        <Route path="/">
          <Content categories={categories} games={games} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App