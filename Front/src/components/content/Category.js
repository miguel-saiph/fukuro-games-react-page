import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './Header'
import GameCover from './GameCover'
import GameService from '../../services/GamesService'


import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from "react-router-dom"

const Category = ({categoryName, games}) => {

  const gamesForCategory = 3

  console.log('Games', games)

  games = games.slice(0, gamesForCategory)

  // const [games, setGames] = useState([])

  // if (!categoryName)
  //   categoryName = useParams().category
  
  // const hook = () => {
  //   console.log('effect')
  //   GameService.getAllGames().then((response) => {
  //     setGames(response)
  //   })
  // }

  // useEffect(hook, [])
  
  return (
    <div className="category">
      <Header categoryName={categoryName} />
      <div className="game-group">
        {/* <GameCover gameName="metroid2" games={games} />
        <GameCover gameName="metroid2" games={games} />
        <GameCover gameName="metroid2" games={games} /> */}
        {games.map(game => 
          <GameCover key={game.id} gameName={game.title} games={games} />
        )}
      </div>
    </div>
  )
}

export default Category