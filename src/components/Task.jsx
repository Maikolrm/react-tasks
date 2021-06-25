import React, { useState } from 'react'

export const Task = ({ task }) => {
  const [disabled, setDisabled] = useState(false)
  const handleRemove = (id) => {
    try {
      alert(id)
    } catch (e) { console.log(e) }
  }
  return(
    <div className={"task " + (task.completed ? 'completed' : '')}>
      <button className={"task__status fas " + (task.completed ? 'fa-check' : 'fa-clock')}></button>
      <p className="task__time">{ task.createdDate }</p>
      <div className="task__description">
        { task.description }
        <div className="task__actions">
          <button className="task__action fas fa-cog"></button>
          <button disabled={disabled} className={"task__action task__action--alert fas " + (disabled ? 'fa-circle-notch' : 'fa-trash')} onClick={() => handleRemove(task.id)}></button>
        </div>
      </div>
    </div>
  )

}

export default Task
