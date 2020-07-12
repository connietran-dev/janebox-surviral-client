import React from 'react'
import { Link } from 'react-router-dom'

export default function PlayGame() {
  return (
    <section className="Play-Game">
      <Link to="/game-over">
        <button className="admin-button">X</button>
      </Link>
      <main>
      <section className="team-log"></section>
      <section className="game-content"></section>
      <section className="player-profile">
        <img src="" alt="" />
        <section className="char-descrip">
          <h3>The Engineer</h3>
          <p>You’ll be responsible for rebuilding a whole new world… Sounds like a lot of work.</p>
        </section>
      </section>
      </main>
    </section>
  )
}
