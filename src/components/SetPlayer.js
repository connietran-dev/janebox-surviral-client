import React from 'react'
import { Link } from 'react-router-dom'

export default function SetPlayer() {
  return (
    <>
      <h1>Set Player Page</h1>
      <form>
        <input type="text" />
        <Link to="/play">
          <button>I'm Ready!</button>
        </Link>
      </form>
    </>
  )
}
