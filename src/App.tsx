import { useState } from 'react'
import './App.css'

function Square({ value }: { value: string | null }): JSX.Element {
  return (
    <button
      className="square"
    >
      {value}
    </button>
  )
}

export default function Board(): JSX.Element {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null))

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-ro">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-ro">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  )
}
