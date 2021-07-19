import React from 'react'

const Header = ({categoryName}) => {
  return (
    <div>
      <span className="content-header">
        <h2 className="title">{categoryName}</h2>
      </span>
    </div>
  )
}

export default Header