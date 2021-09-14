import React from 'react'
import logo from '../../images/logo.svg';
import TopBanner from './TopBanner'
import Nav from './Nav'

const Header = ({categories}) => {
  return (
    <header>
      <TopBanner />
      <Nav categories={categories} />
    </header>
  )
}

export default Header