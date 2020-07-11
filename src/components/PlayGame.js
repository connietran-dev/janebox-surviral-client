import React from 'react'
import { Link } from 'react-router-dom'

export default function PlayGame() {
  return (
    <>
      <h1>Play Game Page</h1>
      <Link to="/game-over">
        <button className="admin-button">All done!</button>
      </Link>
    </>
  )
}
