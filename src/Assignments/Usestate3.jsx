import React from 'react'
import { useState } from 'react'

const Usestate3 = () => {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Name:</p>  
      <input
        type="text"
        className="border border-gray-300 p-2 rounded"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <p>Email:</p>
      <input
        type="email"
        className="border border-gray-300 p-2 rounded"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <p>Password:</p>
      <input
        type="password"
        className="border border-gray-300 p-2 rounded"
        value={passwordValue}
        onChange={() => setPasswordValue((passwordValue) => passwordValue + '*')}
      />
      <p className="font-bold text-blue-500">Your Name: {nameValue}</p>
      <p className="font-bold text-green-500">Your Email: {emailValue}</p>
      <p className="font-bold text-red-500">Your Password: {passwordValue}</p>
    </div>
  )
}

export default Usestate3