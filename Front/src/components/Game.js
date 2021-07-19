import React from 'react'
import DOMPurify from "dompurify";
import htmlPage from '../games/00001/index.html'

const Game = () => {
  console.log(htmlPage);
  return (
    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(htmlPage)} } />
  )
}

export default Game