import { useState } from 'react'
import './App.css'

function Square(): JSX.Element {
  const [value, setValue] = useState<string | null>(null)

  function handleClick(): void {
    setValue('X')
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default function Board(): JSX.Element {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
