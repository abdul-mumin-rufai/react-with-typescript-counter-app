import { useState } from 'react'
import './App.css'

function App() {
  type Status = "idle" | "loading" | "success";

  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<Status>("idle");  //type annotation
  return (
    <>
      <h1>React-with-TypeScript Conuter App.</h1>
      <h2>
        count is {count}
      </h2>

      <br /><br />
      <button onClick={() => setStatus("loading")}>Set Loading</button>
      {status == "loading" &&
        <p>Loading...</p>
      
      }
          
    </>
  )
}

export default App
