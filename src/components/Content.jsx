import React from 'react'
import { Task } from './'

export const Content = () => {
  const tasks = [
    {id: Math.random(), description: 'Test one', completed: 0, createdDate: '9:01' },
    {id: Math.random(), description: 'Test two', completed: 0, createdDate: '9:02' },
    {id: Math.random(), description: 'Test three', completed: 0, createdDate: '9:03' },
    {id: Math.random(), description: 'Test four', completed: 0, createdDate: '9:04' }
  ]
  return(
    <div className="content content--dashboard">
      <h2 className="content__heading">Tasks</h2>
      <div className="content__tasks">
        { tasks.map(task => <Task task={task} key={task.id} />) }
      </div>
    </div>
  )
}

export default Content
