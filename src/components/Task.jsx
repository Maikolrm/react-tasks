import React, { useState, useContext } from 'react'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'
import { handleTasks } from '../api'

export const Task = ({ task }) => {
  const { tasks } = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  const [disabled, setDisabled] = useState(false)
  const handleTask = async (action, params) => {
    try {
      if (action === 'delete') setDisabled(true)
      const response = await handleTasks(action, tasks, params)
      dispatch({ type: 'set-tasks', tasks: response })
    } catch (e) { console.log(e) }
  }
  return(
    <div className={"task " + (task.completed ? 'completed' : '')}>
      <button className={"task__status fas " + (task.completed ? 'fa-check' : 'fa-clock')} onClick={() => handleTask('complete', { id: task.id, completed: !task.completed })}></button>
      <p className="task__time">{ task.createdDate }</p>
      <div className="task__description">
        { task.description }
        <div className="task__actions">
          <button className="task__action fas fa-cog" onClick={() => dispatch({ type: 'show-form', value: true, task: { id: task.id, description: task.description } })}></button>
          <button disabled={disabled} className={"task__action task__action--alert fas " + (disabled ? 'fa-circle-notch' : 'fa-trash')} onClick={() => handleTask('delete', { id: task.id })}></button>
        </div>
      </div>
    </div>
  )

}
