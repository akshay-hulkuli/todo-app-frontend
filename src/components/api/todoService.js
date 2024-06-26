import axios from 'axios'

const apiClient = axios.create({ baseURL: 'http://localhost:8081/' })

export const retrieveAllTodosForUserName = (username) => {
  return apiClient.get(`users/${username}/todos`)
}

export const retrieveTodo = (username, id) => {
  return apiClient.get(`users/${username}/todos/${id}`)
}

export const deleteTodo = (username, id) => {
  return apiClient.delete(`users/${username}/todos/${id}`);
}

export const updateTodo = (username, id, todo) => {
  return apiClient.put(`users/${username}/todos/${id}`, todo);
}

export const createTodo = (username, todo) => {
  return apiClient.post(`users/${username}/todos`, todo);
}
