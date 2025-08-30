import React from 'react'
import { useState } from 'react'

const Usestate4 = () => {
    const [task, setTask] = useState('')
    const [myTasks, setMyTasks] = useState([])
    const tasksCancel = (idToDelete) => {
      setMyTasks(myTasks.filter((_, index) => index !== idToDelete))
    }
    const [completedTasks, setCompletedTasks] = useState([])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">To-Do List</h1>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded mb-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="p-2 bg-blue-500 text-white rounded"
        onClick={() => {
          setMyTasks([...myTasks, task]);
          setTask('');
        }}>
        Add Task
      </button>
      <h2 className="text-xl font-bold">MY Tasks:</h2>
      <ul className="list-disc pl-5 mb-4">
        {myTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="text-red-500 m-2" onClick={() => tasksCancel(index)}>Cancel</button>
            <button className="text-green-500" onClick={() => { setCompletedTasks([...completedTasks, task]); tasksCancel(index); }}>Done</button>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-bold">Completed Tasks:</h3>
      <ul className="list-disc pl-5">
        {completedTasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Usestate4