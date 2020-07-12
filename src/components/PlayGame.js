import React from 'react'
import { Link } from 'react-router-dom'

export default function PlayGame() {
  return (
    <section className="Play-Game">
      <Link to="/game-over">
        <button className="admin-button">X</button>
      </Link>
      <main>
      </main>
    </section>
  )
}
