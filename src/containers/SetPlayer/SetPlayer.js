import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

import apiUrl from '../../apiConfig'
import { PlayerList } from '../../components'

let socket;

export function SetPlayer({ location }) {
  const [name, setName] = useState('')
  const [game, setGame] = useState('')
  const [users, setUsers] = useState([])
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')
  const ENDPOINT = apiUrl

  // Socket emitter for joining game
  function joinUsertoGame(event) {
    event.preventDefault()
    if (users.length === 5) {
      setErr('Sorry! Only 5 can play, better luck next time!')
    } else if (name) {
      setErr('')
      document.getElementById('username-form').style.display = 'none'
      document.getElementById('msg-txt').style.display = 'block'
      setName(event.target.value)

      // Pass callback to execute after socket.emit
      socket.emit('join', { name, game }, () => {})

      // For unmounting of the component when user leaves game, emit disconnect event and turn socket
      return () => {
        socket.emit('disconnect')

        socket.off()
      }
    } else {
      setErr('Please enter a name (any name! be creative!)')
    }

  }

  useEffect(() => {
    const game = location.search.substring(6, 10)
    setGame(game)

    socket = io(ENDPOINT)

    socket.on('message', res => {
      setMsg(res.text)
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users.filter(user => user.game === game))
    })
  }, [msg, location, ENDPOINT]);

  return (
    <section className="Set-Player">
      {
        (location.search.substring(10))
        ? <h2 className="gameid-mark">Your Game ID is: <span>{game}</span></h2>
        : <></>
      }
      <form id="username-form">
        <h1>C h o o s e<span>Y o u r</span><br />C h a r a c t e r</h1>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={joinUsertoGame} className="admin-button" type="submit">I'm Ready!</button>
        <p className='err-msg'>{err}</p>
      </form>
      <p id="msg-txt" className="msg-txt">{msg}</p>
      <PlayerList users={users} />
      <Link to={`/play?game=${game}&name=${name}`}>
        <button id="all-ready" className="admin-button">We're ready!</button>
      </Link>
    </section>
  )

}
