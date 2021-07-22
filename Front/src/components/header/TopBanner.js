import React from 'react'
// import "./header.css";
import logo from '../../images/logo.svg';

const TopBanner = () => {
  return (
    <div className="top-banner">
      <a href="/">
        <img src={logo} alt="" className="logo"></img>
      </a>
    </div>
  )
}

export default TopBanner