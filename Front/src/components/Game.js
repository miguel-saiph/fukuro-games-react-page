import React from 'react'
import htmlPage from '../games/00001/index.html'

const Game = () => {
  console.log(htmlPage);
  return (
    <div dangerouslySetInnerHTML={ {__html: htmlPage} } />
  )
}

export default Game