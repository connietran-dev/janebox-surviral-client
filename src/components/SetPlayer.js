import React from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'

let socket;

function SetPlayer({ location }) {
  const [name, setName] = useState('')
  const [game, setGame] = useState('')
  const ENDPOINT = 'localhost:5000'

  // location.search uses query-string to return query parameters from URL
  useEffect(() => {
    const { game } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setName(name)
    setGame(game)

    // Pass callback to execute after socket.emit
    socket.emit('join', { name, game }, () => {

    })

    // For unmounting of the component when user leaves game, emit disconnect event and turn socket
    return () => {
      socket.emit('disconnect')

      socket.off()
    }
  }, [ENDPOINT, location.search])

  return (
    <section className="Set-Player">
      <h1>Set Player Page</h1>
      <form>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <Link
          onClick={event => (!name) ? event.preventDefault() : (event) => setName(event.target.value)}
          to={`/set-player?game=${game}&name=${name}`}
        >
          <button className="admin-button">I'm Ready!</button>
        </Link>
      </form>
    </section>
  )

}

export default SetPlayer;
