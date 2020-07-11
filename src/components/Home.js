import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/set-player">
        <button>New Game</button>
      </Link>
      <form>
        <input type="text" />
        <Link to="/set-player">
          <input type="submit" value="Join Game"/>
        </Link>
      </form>
    </>
  )
}
