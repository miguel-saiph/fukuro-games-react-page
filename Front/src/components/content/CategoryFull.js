import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

import Header from './Header'
import GameCover from './GameCover'
import CategoryService from '../../services/CategoryService'


const CategoryFull = () => {

  const { category } = useParams();

  const [categoryFull, setCategory] = useState([])

  useEffect(() => {
    CategoryService.getCategoryByName(category).then((categoryFull) => {
      setCategory(categoryFull);
      console.log("This category: ")
      console.log(categoryFull)
    })
  }, [])

  console.log('Hi im category')
  
  return (
    <div className="category">
      <Header categoryName={categoryFull.name} />
      <ul className="game-group">
        {/* <GameCover gameName="metroid2" games={games} />
        <GameCover gameName="metroid2" games={games} />
        <GameCover gameName="metroid2" games={games} /> */}
        {categoryFull.games ? (
          categoryFull.games.map(game => 
            <GameCover key={game.id} gameName={game.title} game={game} />
          )
        ) : (null)
        }
          
      </ul>
    </div>
  )
}

export default CategoryFull