import React from 'react'
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
    user: '',
    loggedIn: false,
    isVisible: false
  }
  const reducer = (draft, action) => {
    switch (action.type) {
      case 'login':
        draft.loggedIn = true
        break
      case 'logout':
        draft.loggedIn = false
        break
      case 'show-form':
        draft.isVisible = action.value
        break
    }
  }
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  return(
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        { state.loggedIn ? <Dashboard /> : <Homepage /> }
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
