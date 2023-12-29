import { useState, useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null)
  const resultRef = useRef(null)

  const [result, setResult] = useState(0)

  function plus(e) {
    e.preventDefault()
    setResult((result) => result + Number(inputRef.current.value))
  }

  function minus(e) {
    e.preventDefault()
    setResult((result) => result - Number(inputRef.current.value))
  }

  function times(e) {
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value))
  }

  function divide(e) {
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
  }

  function resetInput(e) {
    e.preventDefault()
    {
      inputRef.current.value = 0
    }
  }

  function resetResult(e) {
    e.preventDefault()
    setResult((result) => result * 0)
  }

  return (
    <div className='App'>
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>

      <form>
        <p ref={resultRef}>
          {result}
        </p>

        <input
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type a number'
        />

        <button onClick={plus}>ADD</button>
        <button onClick={minus}>SUBTRACT</button>
        <button onClick={times}>MULTIPLY</button>
        <button onClick={divide}>DIVIDE</button>
        <button onClick={resetInput}>RESET INPUT</button>
        <button onClick={resetResult}>RESET RESULT</button>
      </form>
    </div>
  )
}

export default App