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
      const { data } = await axios.get('/fetch-tasks')
      resolve(data)
    } catch (e) { reject(e) }
  }) // PPROMISE END
}

// HANDLE TASKS
export const handleTasks = (action, tasks, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      let taskCopy = [...tasks]
      const { data } = await axios.post(`${action}-task`, params)
      switch (action) {
        case 'create':
          taskCopy.unshift(data)
          break
        case 'delete':
          taskCopy = taskCopy.filter(task => task.id !== params.id)
          break
        case 'complete':
          taskCopy = taskCopy.map(task => {
            if (task.id === params.id)  return { ...task, completed: data.completed }
            return task
          }) // MAP END
          break
        case 'update':
          taskCopy = taskCopy.map(task => {
            if (task.id === params.id) return { ...task, description: data.description }
            return task
          }) // MAP END
      }
      resolve(taskCopy)
    } catch (e) { reject(e) }
  }) // PPROMISE END
}
