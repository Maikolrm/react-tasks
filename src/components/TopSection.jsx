import React from 'react'
import avatar from '../yo.png'
export const TopSection = () => {
  return(
    <div className="top-section">
      <div className="top-section__user">
        <div className="user__avatar">
          <img src={avatar} alt='Maikol Hernandez' />
        </div>
        <div className="user__info">
          <h2 className="user__name">Maikol Hernandez</h2>
          <p className="user__tasks">You have {5} tasks</p>
        </div>
      </div>
    </div>
  )
}

export default TopSection
