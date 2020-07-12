
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { socket } from '../api'

function SetPlayer() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on('users', user => {
      setUsers(users)
    })
  })

  // const onTextChange = e => {
  //   setState({ ...state, [e.target.name]: e.target.value })
  // }

  const onCharacterSubmit = e => {
    // e.preventDefault()
    // const { name, message } = state
    // socket.emit('message', { name, message })
    // setState({ message: '', name })
  }

  const renderCharacters = () => {
    // return chat.map(({ name, message }, index) => (
    //   <div key={index}>
    //     <h3>
    //       {name}: <span>{message}</span>
    //     </h3>
    //   </div>
    // ))
  }

  return (
    <section className="Set-Player">
      <h1>Set Player Page</h1>
      <form onSubmit={onCharacterSubmit}>
        <fieldset className="name-field">
          <label>Character Name
            <input
              name="name"
              label="Name"
            />
          </label>
        </fieldset>
        <fieldset className="type-field">
        <legend>Choose your major:</legend>
          <div className="form-check">
            <label>
              <input type="radio" value="engineering" />
              Engineering
            </label>
          </div>
          <div className="form-check">
            <label>
              <input type="radio" value="chemistry" />
              Chemistry
            </label>
          </div>
          <div className="form-check">
            <label>
              <input type="radio" value="political-science" />
              Political Science
            </label>
          </div>
          <div className="form-check">
            <label>
              <input type="radio" value="business" />
              Business
            </label>
          </div>
          <div className="form-check">
            <label>
              <input type="radio" value="photography" />
              Photography
            </label>
          </div>
        </fieldset>
        <input type="submit" />
      </form>

      <section className="render-characters">
        <h1>Characters Joined</h1>
        <p>{renderCharacters()}</p>
      </section>

      <Link to="/play">
          <button className="admin-button">Next page</button>
        </Link>
    </section>
  )

}

export default SetPlayer;
