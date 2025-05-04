import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>Auto Deploy</h1>
      <h4>update 04/05/2025 14:34(2)</h4>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VUh4cVfvgK0?si=6b7shGibDwmhsbc1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    
      </div>
      
    </>
  )
}

export default App
