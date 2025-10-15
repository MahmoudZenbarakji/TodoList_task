import React, { useState } from 'react';


const AddTask = (task, setTasks, tasks, setTask) => {
  if (!task.trim()) return; 
  setTasks([...tasks, task]);
  setTask('');
};
 const EditTask = (index, tasks, setTask, setEditIndex) => {
  setTask(tasks[index]);
  setEditIndex(index);
};
 const deleteTask = (index, tasks, setTasks) => {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
};
export default { AddTask, EditTask, deleteTask };