import React, { useContext } from 'react'
import { Task } from './'
import StateContext from '../StateContext'

export const Content = () => {
  const { tasks } = useContext(StateContext)
  return(
    <div className="content content--dashboard">
      <h2 className="content__heading">Tasks</h2>
      <div className="content__tasks">
        { tasks.map(task => <Task task={task} key={task.id} />) }
      </div>
    </div>
  )
}
