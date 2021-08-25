import React from 'react'
import logo from '../../images/logo.svg';
import TopBanner from './TopBanner'
import Nav from './Nav'

const Header = ({categories}) => {
  return (
    <div>
      <TopBanner />
      <Nav categories={categories} />
    </div>
  )
}

export default Header