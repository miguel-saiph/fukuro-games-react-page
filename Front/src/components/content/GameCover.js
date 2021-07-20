import React from 'react'
import "./Content.css";
import Cover from '../../images/metroid2_cover.jpg';

import Category from './Category'

const GameCover = ({gameName}) => {

  const basePath = '../../images';
  const coverPath = `${basePath}/${gameName}_cover.jpg`;
  
  return (
    <div className="game-card">
      <a href="/games">
        <img src={Cover} alt="" width="300" height="300"></img>
      </a>
      <div className="head">GameName</div>
      <table className="stats">
        <tbody>
          <tr>
            <td>
              Rating: 99
            </td>
          </tr>
          <tr>
            <td>
              Plays: 105
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GameCover