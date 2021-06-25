import React from 'react'

export const Task = ({ task }) => {
  return(
    <div className={"task " + (task.completed ? 'completed' : '')}>
      <button className={"task__status fas " + (task.completed ? 'fa-check' : 'fa-clock')}></button>
      <p className="task__time">{ task.createdDate }</p>
      <div className="task__description">
        { task.description }
        <div className="task__actions">
          <button className="task__action fas fa-cog"></button>
          <button className="task__action task__action--alert fas fa-trash"></button>
        </div>
      </div>
    </div>
  )

}

export default Task
