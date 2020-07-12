import React from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import io from 'socket.io-client'

let socket;

function SetPlayer({ location }) {
  const [name, setName] = useState('')
  const [game, setGame] = useState('')
  const ENDPOINT = 'localhost:5000'

  // Socket emitter for joining game
  // location.search uses query-string to return query parameters from URL
  function joinUsertoGame(event) {
    if (!name) {
      event.preventDefault()
    } else {
      setName(event.target.value)

      const { game } = queryString.parse(location.search)
      setGame(game)
      
      console.log("name", name, "game", game)
      socket = io(ENDPOINT)

      // Pass callback to execute after socket.emit
      socket.emit('join', { name, game }, () => {

      })

      // For unmounting of the component when user leaves game, emit disconnect event and turn socket
      return () => {
        socket.emit('disconnect')

        socket.off()
      }

    }

  }

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
          onClick={joinUsertoGame}
          to={`/set-player?game=${game}&name=${name}`}
        >
          <button className="admin-button">I'm Ready!</button>
        </Link>
      </form>
      <div className="Message-Container">
        <h2>Current Game: {game}</h2>
      </div>
    </section>
  )

}

export default SetPlayer;
