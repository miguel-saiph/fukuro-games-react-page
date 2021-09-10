import React, { useState, useEffect } from 'react'
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
// import htmlPage from '../games/00001/index.html'
import GameService from '../services/GamesService'

const Game = () => {

  const { id } = useParams();
  console.log('id', id)

  const [game, setGame] = useState({})

  useEffect(() => {
    GameService.getGame(id)
    .then((response) => {
      setGame(response)
    })
  }, [])

  console.log('Hi Im rendering');
  const htmlPage = require(`../games/${id}/index.html`).default;
  
  return (
    <div>
      <h1> {game.title} </h1>
      <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(htmlPage)} } />
    </div>
    
  )
}

export default Game