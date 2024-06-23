
import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/todoApi';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  const handleCreateTask = async () => {
    try {
      const response = await createTask({ title: newTask, status: 'pending' });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error creating task', error);
    }
  };

  const handleUpdateTitle = async (id, title) => {
    try {
      const response = await updateTask(id, { title });
      setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error('Error updating task title', error);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await updateTask(id, { status });
      setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error('Error updating task status', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleCreateTask}
          className="bg-blue-500 text-white p-2"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map(task => (
          <Task
            key={task._id}
            task={task}
            onDelete={handleDeleteTask}
            onUpdateTitle={handleUpdateTitle}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

