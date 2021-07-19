import React from 'react'
import "./Content.css";

import Category from './Category'

const Content = () => {
  return (
    <div>
      <Category categoryName="All games" />
      <Category categoryName="MMO" />
      <Category categoryName="Strategy" />
    </div>
  )
}

export default Content