import axios from 'axios'
import md5 from 'md5'

// LOGIN
export const login = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = {
        name: 'Maikol',
        lastname: 'Hernández',
        avatar: `https://www.gravatar.com/avatar/${md5(email)}?s=200`
      }
      setTimeout(() => resolve(user), 200)
    } catch (e) { reject(e) }
  }) // PPROMISE END
}

// FETCH TASKS
export const fetchTasks = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = JSON.parse(localStorage.getItem('tasks'))
      setTimeout(() => resolve(response ? response : []), 400)
    } catch (e) { reject(e) }
  }) // PPROMISE END
}

// HANDLE TASKS
export const handleTasks = (action, tasks, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      let taskCopy = [...tasks]
      switch (action) {
        case 'create':
          taskCopy.unshift({ id: Math.random(), description: params.description, completed: 0 })
          break
        case 'delete':
          taskCopy = taskCopy.filter(task => task.id !== params.id)
          break
        case 'complete':
          taskCopy = taskCopy.map(task => {
            if (task.id === params.id)  return { ...task, completed: params.completed }
            return task
          }) // MAP END
          break
        case 'update':
          taskCopy = taskCopy.map(task => {
            if (task.id === params.id) return { ...task, description: params.description }
            return task
          }) // MAP END
      }
      action !== 'complete' ? setTimeout(() => resolve(taskCopy), 200) : resolve(taskCopy)
    } catch (e) { reject(e) }
  }) // PPROMISE END
}
