import React from 'react'
import Header from './Header'
import GameCover from './GameCover'

const Category = ({categoryName}) => {
  return (
    <div className="category">
      <Header categoryName={categoryName} />
      <div className="game-group">
        <GameCover />
        <GameCover />
        <GameCover />
      </div>
    </div>
  )
}

export default Category