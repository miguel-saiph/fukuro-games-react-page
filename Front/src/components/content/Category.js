import React from 'react'
import Header from './Header'
import GameCover from './GameCover'

import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from "react-router-dom"

const Category = ({categoryName}) => {

  if (!categoryName)
    categoryName = useParams().category
  
  console.log(categoryName);
  return (
    <div className="category">
      <Header categoryName={categoryName} />
      <div className="game-group">
        <GameCover gameName="metroid2" />
        <GameCover gameName="metroid2" />
        <GameCover gameName="metroid2" />
      </div>
    </div>
  )
}

export default Category