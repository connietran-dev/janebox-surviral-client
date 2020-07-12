import React from 'react'
import { Link } from 'react-router-dom'

export default function GameOver() {
  return (
    <section className="Game-Over">
      <h1>G a m e - O v e r</h1>
      <Link to="/">
        <button className="admin-button">Play again!</button>
      </Link>
    </section>
  )
}
