import React, { useContext } from 'react'
import { Page, TopSection, Content, Navigation, CreateTask } from './'
import { CSSTransition } from 'react-transition-group'
import StateContext from '../StateContext'

export const Dashboard = () => {
  const { isVisible } = useContext(StateContext)
  return(
    <Page title='Dasbaord!' >
      <CSSTransition in={isVisible} timeout={200} classNames='modal' unmountOnExit>
        <CreateTask />
      </CSSTransition>
      <TopSection />
      <Content />
      <Navigation />
    </Page>
  )
}
