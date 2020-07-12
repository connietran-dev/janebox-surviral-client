import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [game, setGame] = useState('')

  return (
    <section className="Home">
      <h1>S u r <span>V i r a l</span></h1>
      <p>Your university's abandoned you..<br /> a virus is on the loose..<br /> and your
      friends are all you have</p>
      <p><em>Do you have what it takes to make it
      out alive?</em></p>
      <section className="menu">
        <Link className="menu-opt" to="/set-player">
          <button className="admin-button">New Game</button>
        </Link>
        <form className="menu-opt">
          <input className="input-field" type="text" onChange={(event) => setGame(event.target.value)} />
          <Link onClick={e => (!game) ? e.preventDefault() : null} to={`/set-player?game=${game}`}>
            <input className="admin-button" type="submit" value="Join Game"/>
          </Link>
        </form>
      </section>
    </section>
  )
}

export default Home