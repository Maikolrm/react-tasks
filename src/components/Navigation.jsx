import React from 'react'

export const Navigation = () => {
  return(
    <nav className="nav">
      <button className="nav__btn fas fa-tasks selected"></button>
      <button className="nav__btn fas fa-plus"></button>
      <button className="nav__btn fas fa-sign-out-alt"></button>
    </nav>
  )
}

export default Navigation
