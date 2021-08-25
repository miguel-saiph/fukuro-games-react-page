import React from 'react'
import "./Content.css";
import Cover from '../../images/metroid2_cover.jpg';

import Category from './Category'

const GameCover = ({games}) => {

  const basePath = '../../images';
  const coverPath = `${basePath}/${games[0]}_cover.jpg`;
  let urlPath = `/games/`
  
  if (games && games.length > 0) urlPath += games[0].id
  console.log(games[0])
  return (
    <div className="game-card">
      <a href={urlPath}>
        <img src={Cover} alt="" width="300" height="300"></img>
      </a>
      <div className="head"> {games && games.length > 0 ? games[0].title : '' } </div>
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