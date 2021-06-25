import React, { useContext } from 'react'
import StateContext from '../StateContext'

export const TopSection = () => {
  const { user, tasks } = useContext(StateContext)
  return(
    <div className="top-section">
      <div className="top-section__user">
        <div className="user__avatar">
          <img src={user.avatar} alt={`${user.name} ${user.lastname}`} />
        </div>
        <div className="user__info">
          <h2 className="user__name">{user.name} {user.lastname}</h2>
          <p className="user__tasks">You have {tasks.length} tasks</p>
        </div>
      </div>
    </div>
  )
}
