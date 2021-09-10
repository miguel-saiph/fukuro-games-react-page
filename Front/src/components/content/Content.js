import React from 'react'
import "./Content.css";

import Category from './Category'

const Content = ({categories, games}) => {
  console.log('Cat: ', categories)
  return (
    <div>
      <Category categoryName="All games" games={games}/>
      {categories.map(category => 
        <Category key={category.id} categoryName={category.name} games={category.games} />
      )}
    </div>
  )
}

export default Content