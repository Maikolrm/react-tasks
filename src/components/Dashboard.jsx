import React, { useContext } from 'react'
import { TopSection, Content, Navigation, CreateTask } from './'
import StateContext from '../StateContext'

export const Dashboard = () => {
  const { isVisible } = useContext(StateContext)
  return(
    <>
      { isVisible ? <CreateTask /> : '' }
      <TopSection />
      <Content />
      <Navigation />
    </>
  )
}

export default Dashboard
