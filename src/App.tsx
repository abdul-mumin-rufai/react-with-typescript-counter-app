import { useState } from 'react'
import './App.css'
import Button from './Button';

export type Action = "decrease" | "increase";
//type Status = "idle" | "loading" | "success";


function App() {

  const [count, setCount] = useState(0);
  //const [status, setStatus] = useState<Status>("idle");  //type annotation

  function updateCount(action: Action) {
    if (action == "increase") {
      setCount(count + 1)
    } else if (action == "decrease") {
      setCount(count - 1);
    }
  }


  return (
    <>
      <h1>React-with-TypeScript Conuter App.</h1>
      <h2>
        count is {count}
      </h2>
      <Button action={"decrease"} clickHandler={updateCount } />
      <Button action={"increase"} clickHandler={updateCount} />

     {/*  <br /><br />
      <button onClick={() => setStatus("loading")}>Set Loading</button>
      {status == "loading" &&
        <p>Loading...</p>
      } */}

    </>
  )
}

export default App
