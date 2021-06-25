import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000'

// LOGIN
export const login = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post('/login', { email })
      resolve(data)
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
            if (task.id === params.id) {
              return { ...task, completed: data.completed }
            } else { return task }
          }) // MAP END
        case 'update':
          taskCopy = taskCopy.map(task => {
            if (task.id === params.id) {
              return { ...task, description: data.description }
            } else { return task }
          }) // MAP END
      }
      resolve(taskCopy)
    } catch (e) { reject(e) }
  }) // PPROMISE END
}
