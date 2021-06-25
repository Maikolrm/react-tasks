import React from 'react'
import { Login } from './'

export const Homepage = () => {
  return(
    <div className="content content--homepage">
      <div className="homepage__top-section">
        <span className="top-section__icon fas fa-tasks"></span>
      </div>
      <Login />
    </div>
  )
}
