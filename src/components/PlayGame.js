import React from 'react'
import { Link } from 'react-router-dom'
import TeamLog from './TeamLog'
import PlayerProfile from './PlayerProfile'
import Email from './Email'

export default function PlayGame() {
  return (
    <section className="Play-Game">
      <Email />
      <Link to="/game-over">
        <button className="admin-button">X</button>
      </Link>
      <main>
        <TeamLog />
        <section className="game-content"></section>
        <PlayerProfile />
      </main>
    </section>
  )
}
