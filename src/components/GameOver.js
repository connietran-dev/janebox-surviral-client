import React from 'react'
import { Link } from 'react-router-dom'

export default function GameOver() {
  const msg = result => {
    if (result === 'win') {
      return 'Congrats! You won!'
    } else {
      return "Damn... You lost :'("
    }
  }
  return (
    <section className="Game-Over">
      <h1>G a m e - O v e r</h1>
      <p className="end-msg">{msg('lose')}</p>
      <Link to="/">
        <button className="admin-button">Play again!</button>
      </Link>
    </section>
  )
}
