import React from 'react'

// STYLES
import './css/reset.css'
import './css/modal.css'
import './css/form.css'
import './css/top-section.css'
import './css/content.css'
import './css/tasks.css'
import './css/nav.css'

// COMPONENTS
import { Homepage, Dashboard } from './components'

export const App = () => {
  const loggedIn = false
  return(
    <>
      { loggedIn ? <Dashboard /> : <Homepage /> }
    </>
  )
}

export default App
