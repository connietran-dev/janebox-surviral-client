import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { socket } from '../api'

function SetPlayer() {
  const [state, setState] = useState({ message: '', name: '' })
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })

  const onTextChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = e => {
    e.preventDefault()
    const { name, message } = state
    socket.emit('message', { name, message })
    setState({ message: '', name })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <>
      <h1>Set Player Page</h1>
      <form>
        <input type="text" />
        <Link to="/play">
          <button>I'm Ready!</button>
        </Link>
      </form>
      <h2>Dorm Message Board</h2>
      <div className="name-field">
        <p>Character Name</p>
        <input
          name="name"
          onChange={e => onTextChange(e)}
          value={state.name}
          label="Name"
        />
      </div>
      <form onSubmit={onMessageSubmit}>
        <p>Message</p>
        <input
          name="message"
          onChange={e => onTextChange(e)}
          value={state.message}
          variant="outlined"
          label="Message"
        />
        <button>Send</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </>
  )

}

export default SetPlayer;
