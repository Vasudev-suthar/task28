
import React, { useState } from 'react';

const Task = ({ task, onDelete, onUpdateTitle, onUpdateStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdateTitle = () => {
    onUpdateTitle(task._id, newTitle);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 mr-2"
        />
      ) : (
        <>
          <span>{task.title}</span>
          <span className="ml-4 text-sm text-gray-600">
            {task.status === 'completed' ? 'Completed' : 'Pending'}
          </span>
        </>
      )}
      <div>
        {isEditing ? (
          <>
            <button
              onClick={handleUpdateTitle}
              className="bg-blue-500 text-white p-2 mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white p-2 mr-2"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white p-2 mr-2"
            >
              Update
            </button>
            <button
              onClick={() => onUpdateStatus(task._id, 'completed')}
              className="bg-green-500 text-white p-2 mr-2"
            >
              Complete
            </button>
            <button
              onClick={() => onDelete(task._id)}
              className="bg-red-500 text-white p-2"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Task;
