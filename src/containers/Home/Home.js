import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'

export function Home() {
  const [gameId, setGameId] = useState('')

  useEffect(() => {
    const randomizedID = Math.random().toString(36).substring(2, 6).toUpperCase()
    setGameId(randomizedID)
  }, [])

  return (
    <section className="Home">
      <header className="intro">
        <h1 className="title">S u r <span>V i r a l</span></h1>
        <p className="intro">Your university's abandoned you..</p>
        <p className="intro">a virus is on the loose..</p> 
        <p className="intro">and your friends are all you have</p>
        <p><em>Do you have what it takes to make it out alive?</em></p>
      </header>
      <main className="menu">
        <Link className="menu-opt" to={`/set-player?game=${gameId}/host/`}>
          <button className="admin-button">New Game</button>
        </Link>
        <form className="menu-opt">
          <input
            className="input-field"
            type="text"
            onChange={(event) => setGameId(event.target.value)}
          />
          <Link
            onClick={event => (!gameId) ? event.preventDefault() : null}
            to={`/set-player?game=${gameId}`}
          >
            <input className="admin-button" type="submit" value="Join Game"/>
          </Link>
        </form>
      </main>
      <Link className="about-link" to="/about">About This Project</Link>
    </section>
  )
}
