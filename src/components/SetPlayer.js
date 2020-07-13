import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'

import PlayerList from './PlayerList'

let socket;

function SetPlayer({ location }) {
  const [name, setName] = useState('')
  const [game, setGame] = useState('')
  const [users, setUsers] = useState([])
  const [msg, setMsg] = useState('')
  const ENDPOINT = 'localhost:5000'

  // Socket emitter for joining game
  // location.search uses query-string to return query parameters from URL
  function joinUsertoGame(event) {
    event.preventDefault()
    if (name) {
      document.getElementById('username-form').style.display = 'none'

      setName(event.target.value)

      const game = location.search.substring(6, 10)
      setGame(game)

      // Pass callback to execute after socket.emit
      socket.emit('join', { name, game }, () => {})

      // For unmounting of the component when user leaves game, emit disconnect event and turn socket
      return () => {
        socket.emit('disconnect')

        socket.off()
      }

    }

  }

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.on('message', res => {
      setMsg(res.text)
    })
    socket.on('roomData', ({ users }) => {
      setUsers(users)
    });
  }, [msg]);

  return (
    <section className="Set-Player">
      <h1>Set Player Page</h1>
      <form id="username-form">
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={joinUsertoGame} className="admin-button" type="submit">I'm Ready!</button>
      </form>
      <p>{msg}</p>
      <PlayerList users={users} />
      {
        (location.search.substring(10))
        ? <Link to={`/set-player?game=${game}&name=${name}`}>
            <button className="admin-button">We're ready!</button>
          </Link>
        : <></>
      }
    </section>
  )

}

export default SetPlayer;
