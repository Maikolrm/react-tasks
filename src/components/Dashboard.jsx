import React, { useContext } from 'react'
import { Page, TopSection, Content, Navigation, CreateTask } from './'
import { CSSTransition } from 'react-transition-group'
import StateContext from '../StateContext'
import { fetchTasks } from '../api'

export const Dashboard = () => {
  const { isVisible } = useContext(StateContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await fetchTasks()
        console.log(tasks)
      } catch (e) { console.log(e) }
    }
    fetchData()
  }, [])
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
