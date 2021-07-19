import React from 'react'
import "./Content.css";
import Cover from '../../images/metroid2_cover.jpg';

import Category from './Category'

const GameCover = () => {
  return (
    <div className="game-card">
      <img src={Cover} alt="" width="300" height="300"></img>
    </div>
  )
}

export default GameCover