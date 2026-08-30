import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>Nutrition App</h1>
      </header>
      <main>
        <p>Welcome to your Nutrition App</p>
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </main>
    </div>
  )
}
