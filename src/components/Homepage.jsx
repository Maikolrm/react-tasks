import React from 'react'
import { Page, Login } from './'

export const Homepage = () => {
  return(
    <Page title='Welcome!'>
      <div className="content content--homepage">
        <div className="homepage__top-section">
          <span className="top-section__icon fas fa-tasks"></span>
        </div>
        <Login />
      </div>
    </Page>
  )
}
