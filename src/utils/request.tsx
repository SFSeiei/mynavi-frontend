import axios from 'axios'
import { getToken } from './auth'
import { redirect } from 'common/businessUtil'
import history from 'utils/history'
import { routeList } from 'routes/routes'
const service = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 15000,
})

service.interceptors.request.use(
  config => {
    document.body.classList.add('loading-indicator')

    if (getToken()) {
      config.headers['Authorization'] = getToken()
    }

    return config
  },
  error => {
    document.body.classList.remove('loading-indicator')
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    document.body.classList.remove('loading-indicator')
    const { code, message, data } = response.data
    if (code !== 200) {
      if (code === 301) {
        redirect()
        return response
      }
      if (code === 500) {
        // catched by ErrorBoundary to show 500 page
        history.push(routeList.errorBoundary)
      }
      // if (code === 404) {
      //   history.push(routeList.unauthorized)
      // }
      return Promise.reject({ message })
    } else {
      return data
    }
  },
  error => {
    document.body.classList.remove('loading-indicator')
    return Promise.reject(error)
  }
)

export default service
