import React, { useState } from 'react';
import { AddTask, EditTask, deleteTask } from '../cruds';

const Input = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
      setTask('');
    } else {
      AddTask(task, setTasks, tasks, setTask);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col items-center pt-20">
      
      <div className="flex justify-center mb-12">
        <img
          src="/business-to-do-list-flat-icon-modern-style-vector.jpg"
          alt="Todo Image"
          style={{ width: '200px', height: 'auto' }}
          className="rounded-lg shadow-md"
        />
      </div>

      
      <div className="bg-[#FAF3E0] shadow-xl rounded-2xl p-6 w-96 border-t-4 border-orange-500">
        <h1 className="text-2xl font-bold text-orange-600 text-center mb-4">
          Todo List
        </h1>

        <p className="text-gray-600 text-center mb-6">
          {tasks.length} Tasks you have
        </p>

        
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="border border-gray-300 rounded-md p-2 w-full text-black 
                       focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
          />
          <button
            onClick={handleAdd}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-md p-2 ml-2 transition duration-200"
          >
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </div>

        
        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 p-2 bg-white rounded-md shadow-sm"
            >
              <span className="text-gray-800">{t}</span>
              <div>
                <button
                  onClick={() => EditTask(index, tasks, setTask, setEditIndex)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(index, tasks, setTasks)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Input;
