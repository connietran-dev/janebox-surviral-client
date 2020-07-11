import React from 'react'
import { Link } from 'react-router-dom'

export default function GameOver() {
  return (
    <>
      <h1>Game Over Page</h1>
      <Link to="/">
        <button>Play again!</button>
      </Link>
    </>
  )
}
