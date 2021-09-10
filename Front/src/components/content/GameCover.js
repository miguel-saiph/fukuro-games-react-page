import React, {useState} from 'react'
import "./Content.css";
// import Cover from '../../images/metroid2_cover.jpg';

import Category from './Category'

const GameCover = ({ game }) => {

  const [showTitle, setShowTitle] = useState(false);

  const basePath = '../../images';
  const coverPath = `${basePath}/${game.id}.jpg`;
  let urlPath = `/games/`

  if (game) urlPath += game.id

  const toggleTitle = () => {
    setShowTitle(!showTitle);
  }

  return (
    <li>
      <a href={urlPath} className="game-card" 
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}>
        {showTitle ? 
        (<div className="cover-title">{game.title}</div>) : (null)
        }
        <img src={coverPath} alt={game.title}></img>
      </a>
      {/* <div className="head"> {game ? game.title : '' } </div> */}
      {/* <table className="stats">
        <tbody>
          <tr>
            <td>
              Rating: {game.rating}
            </td>
          </tr>
          <tr>
            <td>
              Plays: {game.plays}
            </td>
          </tr>
        </tbody>
      </table> */}
    </li>
  )
}

export default GameCover