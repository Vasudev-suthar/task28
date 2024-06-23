// src/api/todoApi.js
import axios from 'axios';

const API_URL = 'https://task28backend.onrender.com/api/tasks'; // Update with your actual backend URL

export const getTasks = () => axios.get(API_URL);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, updates) => axios.put(`${API_URL}/${id}`, updates);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
