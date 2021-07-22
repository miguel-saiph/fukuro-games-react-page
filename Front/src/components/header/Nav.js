import React from 'react'
import "./header.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-set">
        <li className="nav-item">
          <a href='/categories/'>MMO</a>
        </li>
        <li className="nav-item">
          <a href="/">Strategy</a>
        </li>
        <li className="nav-item">
          <a href="/">Action</a>
        </li>
        <li className="nav-item">
          <a href="/">RPG</a>
        </li>
        <li className="nav-item">
          <a href="/">Adventure</a>
        </li>
        <li className="nav-item">
          <a href="/">Puzzle</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav