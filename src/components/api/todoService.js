import axios from 'axios'

const apiClient = axios.create({ baseURL: 'http://localhost:8081/' })

export const retrieveAllTodosForUserName = (username) => {
  return apiClient.get(`users/${username}/todos`)
}

export const deleteTodo = (username, id) => {
  return apiClient.delete(`users/${username}/todos/${id}`);
}
