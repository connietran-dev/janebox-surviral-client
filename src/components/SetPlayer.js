import React from 'react'
import { Link } from 'react-router-dom'

function SetPlayer() {
  return (
    <section className="Set-Player">
      <h1>Set Player Page</h1>
      <form>
        <input className="input-field" type="text" />
        <Link to="/play">
          <button className="admin-button">I'm Ready!</button>
        </Link>
      </form>
    </section>
  )

}

export default SetPlayer;
