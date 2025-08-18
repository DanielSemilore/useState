import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [Decrease, setDecrease] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
      <div>
        <p>count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
        <p> Decrease is {Decrease}</p>
        <button onClick={() => setDecrease((Decrease) => Decrease - 1)}>
          Decrease
        </button>
      </div>
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <p>Hello, {name}!</p>
      </div>
    </>
  )
}

export default App
