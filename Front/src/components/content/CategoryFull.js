import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

import Header from './Header'
import GameCover from './GameCover'
import CategoryService from '../../services/CategoryService'


const CategoryFull = ({categoryName, games}) => {

  const { category } = useParams();

  const [categoryFull, setCategories] = useState([])

  useEffect(() => {
    CategoryService.getAllCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

  console.log('Hi im category')
  
  return (
    <div className="category">
      <Header categoryName={category} />
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

export default CategoryFull