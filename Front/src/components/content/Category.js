import React from 'react'
import Header from './Header'
import GameCover from './GameCover'

const Category = ({categoryName}) => {
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