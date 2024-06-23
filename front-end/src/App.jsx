// src/App.jsx
import React from 'react';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
  return (
    <div className="App container mx-auto p-4">
      <TaskList />
    </div>
  );
};

export default App;

