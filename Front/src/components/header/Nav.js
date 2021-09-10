import React, { useState, useEffect } from 'react'
import "./header.css";

const Nav = ({categories}) => {

  return (
    <div className="nav">
      <ul className="nav-set">
        {categories.map(category => 
          <li key={category.id} className="nav-item">
            <a href={`/${category.name}`}> {category.name} </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Nav