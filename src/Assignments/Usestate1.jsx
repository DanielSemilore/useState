import React from 'react'
import { useState } from 'react'

const Usestate1 = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="src/assets/react.svg" alt="" className="w- h-100"/>
            <div className="flex flex-row mt-4">
                <h1 className="mr-1">If you like the picture above picture CLick</h1>
                <input type="checkbox" className="w-5" onClick={() => setIsChecked(!isChecked)}/>
            </div>
            <h2>
                You {isChecked ? "like" : "don't like"} the picture.
            </h2>
        </div>
    </div>
  )
}
export default Usestate1