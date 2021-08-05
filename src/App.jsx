import React, { useEffect } from 'react'
import { useImmerReducer } from 'use-immer'

// STYLES
import './css/reset.css'
import './css/modal.css'
import './css/loader.css'
import './css/form.css'
import './css/top-section.css'
import './css/content.css'
import './css/tasks.css'
import './css/nav.css'
import './css/media.css'

// COMPONENTS
import { Homepage, Dashboard } from './components'

// CONTEXT
import StateContext from './StateContext'
import DispatchContext from './DispatchContext'

export const App = () => {
  const initialState = {
    tasks: [],
    user: JSON.parse(localStorage.getItem('user')),
    loggedIn: Boolean(localStorage.getItem('user')),
    isVisible: false,
    toUpdate: null
  }
  const reducer = (draft, action) => {
    switch (action.type) {
      case 'login':
        draft.loggedIn = true
        draft.user = action.user
        break
      case 'logout':
        draft.loggedIn = false
        break
      case 'show-form':
        draft.isVisible = action.value
        if (action.task) {
          draft.toUpdate = action.task
        } else {
          draft.toUpdate = null
        }
        break
      case 'set-tasks':
        draft.tasks = action.tasks
        break
    }
  }
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem('user', JSON.stringify(state.user))
    } else {
      localStorage.removeItem('user')
    }
  }, [state.loggedIn])
  // WATCH FOR TAKS CHANGES
  useEffect(() => {
    if (state.tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    } else {
      localStorage.removeItem('tasks')
    }
  }, [state.tasks])
  return(
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        { state.loggedIn ? <Dashboard /> : <Homepage /> }
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
