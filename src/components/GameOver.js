import React from 'react'
import { Link } from 'react-router-dom'

export default function GameOver({ location }) {
  const points = parseInt(location.search.substring(18))

  const msg = points => {
    if (points >= 5) {
      return 'Congrats! You won!'
    } else {
      return "Dang... You lost :'("
    }
  }

  return (
    <section className="Game-Over">
      <h1>G a m e - O v e r</h1>
      <p className="end-msg">{msg(points)}</p>
      <Link to="/">
        <button className="admin-button">Play again!</button>
      </Link>
    </section>
  )
}
