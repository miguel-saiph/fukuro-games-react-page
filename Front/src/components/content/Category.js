import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './Header'
import GameCover from './GameCover'


const Category = ({categoryName, games}) => {

  const gamesForCategory = 5;

  games = games.slice(0, gamesForCategory);
  
  return (
    <div className="category">
      <Header categoryName={categoryName} />
      <ul className="game-group">
        {/* <GameCover gameName="metroid2" games={games} />
        <GameCover gameName="metroid2" games={games} />
        <GameCover gameName="metroid2" games={games} /> */}
          {games.map(game => 
            <GameCover key={game.id} gameName={game.title} game={game} />
          )}
      </ul>
    </div>
  )
}

export default Category