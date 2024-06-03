import axios from 'axios'

const apiClient = axios.create({ baseURL: 'http://localhost:8081/hello-world' })

export const retrieveHelloWorldMessage = () => {
  return apiClient.get('http://localhost:8081/hello-world')
}
