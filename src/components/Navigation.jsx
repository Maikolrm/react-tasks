import React, { useContext } from 'react'
import DispatchContext from '../DispatchContext'

export const Navigation = () => {
  const dispatch = useContext(DispatchContext)
  return(
    <nav className="nav">
      <button className="nav__btn fas fa-tasks selected"></button>
      <button className="nav__btn fas fa-plus" onClick={() => dispatch({ type: 'show-form', value: true })}></button>
      <button className="nav__btn fas fa-sign-out-alt" onClick={() => dispatch({ type: 'logout' })}></button>
    </nav>
  )
}
