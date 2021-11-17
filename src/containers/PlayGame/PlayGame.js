import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

import apiUrl from '../../apiConfig'

import { Email, GameContent, TeamLog } from '../../components'

let socket;

export function PlayGame({ location }) {
  const [users, setUsers] = useState([])
  const [title, setTitle] = useState('')
  const [descrip, setDescrip] = useState('')
  const ENDPOINT = apiUrl

  function chooseMajor(event) {
    event.preventDefault()
    const major = event.target.children[1].value

    document.getElementById('profile-img').classList.add(major)
    switch(major) {
      case 'engineering':
        setTitle('The Engineer')
        setDescrip('You’ll be responsible for rebuilding a whole new world… Sounds like a lot of work.')
        break;
      case 'chemistry':
        setTitle('The Chemist')
        setDescrip('Found a vaccine yet? No? Well that baking soda and vinegar volcano is pretty cool too.')
        break;
      case 'political-science':
        setTitle('The PoliSci Guy')
        setDescrip('Down with the government! Anarchy!')
        break;
      case 'business':
        setTitle('Business Lady')
        setDescrip('You breifly reflect on if capitalism might be to blame for all of this death and despair… Nah, it’s Millennials’ fault.')
        break;
      case 'photography':
        setTitle('The Photographer')
        setDescrip('At least when the world burns, you won’t have to figure out how to pay back all that college debt.')
        break;
      default:
    }

    document.getElementById('player-profile').style.display = 'block'
    document.getElementById('lets-play').style.display = 'block'
    document.getElementById('char-choice').style.display = 'none'
  }

  useEffect(() => {
    const game = location.search.substring(6, 10)

    socket = io(ENDPOINT)

    socket.on('roomData', ({ users }) => {
      setUsers(users.filter(user => user.game === game))
    })
  }, [location, ENDPOINT]);

  return (
    <section className="Play-Game">
      <Email />
      <Link to="/">
        <button className="admin-button">X</button>
      </Link>
      <main>
        <TeamLog users={users} />
        <GameContent />
        <form id="char-choice" onSubmit={chooseMajor} className="char-choice">
          <p>Welp. Not the semester you imagined... but you still gotta study.
           <br/><span>What's your major?</span></p>
          <select id="majors" name="majors">
            <option value="engineering">Engineering</option>
            <option value="chemistry">Chemistry</option>
            <option value="political-science">Political Science</option>
            <option value="business">Business</option>
            <option value="photography">Photography</option>
          </select>
          <input type="submit"></input>
        </form>
        <section id="player-profile" className="player-profile">
          <img id="profile-img" src="" alt="" />
          <section className="char-descrip">
            <h3>{title}</h3>
            <p>{descrip}</p>
          </section>
        </section>
      </main>
    </section>
  )
}
