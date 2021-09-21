import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem('token')

    config.headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
