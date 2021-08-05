import React, { useState, useEffect, useContext } from 'react'
import { Page, Loader, TopSection, Content, Navigation, CreateTask } from './'
import { CSSTransition } from 'react-transition-group'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'
import { fetchTasks } from '../api'

export const Dashboard = () => {
  const { tasks, user, isVisible } = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'set-tasks', tasks: tasks })
        setLoading(false)
      } catch (e) { console.log(e) }
    }
    fetchData()
  }, [])
  return(
    <Page title={`${user.name} ${user.lastname}`}>
      { loading ? <Loader /> : '' }
      <CSSTransition in={isVisible} timeout={200} classNames='modal' unmountOnExit>
        <CreateTask />
      </CSSTransition>
      <TopSection />
      <Content />
      <Navigation />
    </Page>
  )
}
