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
      const taskCopy = [...tasks]
      const { data } = await axios.post(`${action}-task`, params)
      switch (action) {
        case 'create':
          taskCopy.unshift(data)
          break
      }
      resolve(taskCopy)
    } catch (e) { reject(e) }
  }) // PPROMISE END
}