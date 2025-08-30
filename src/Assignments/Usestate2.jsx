import React from 'react'
import { useState } from 'react'

const Usestate2 = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4" style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <h1 className="text-2xl font-bold">Toggle Dark Mode</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-blue-500 text-white rounded">
        Dark Mode
      </button>
      <p>The current mode is {darkMode ? 'Dark' : 'Light'}</p>
    </div>
  )
}

export default Usestate2