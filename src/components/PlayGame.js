import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

import TeamLog from './TeamLog'
import Email from './Email'

let socket;

export default function PlayGame({ location }) {
  const [users, setUsers] = useState([])
  // const [game, setGame] = useState('')
  const [title, setTitle] = useState('')
  const [descrip, setDescrip] = useState('')
  const ENDPOINT = 'localhost:5000'

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
        // document.getElementById('profile-img').style.background = `url('./img/humans/chemist.png') no-repeat center center scroll`
        setTitle('The Chemist')
        setDescrip('Found a vaccine yet? No? Well that baking soda and vinegar volcano is pretty cool too.')
        break;
      case 'political-science':
        // document.getElementById('profile-img').style.background = `url('./img/humans/polisci.png') no-repeat center center scroll`
        setTitle('The PoliSci Guy')
        setDescrip('Down with the government! Anarchy!')
        break;
      case 'business':
        // document.getElementById('profile-img').style.background = `url('./img/humans/business.png') no-repeat center center scroll`
        setTitle('Business Lady')
        setDescrip('You breifly reflect on if capitalism might be to blame for all of this death and despair… Nah, it’s Millennials’ fault.')
        break;
      case 'photography':
        // document.getElementById('profile-img').style.background = `url('./img/humans/photog.png') no-repeat center center scroll`
        setTitle('The Photographer')
        setDescrip('At least when the world burns, you won’t have to figure out how to pay back all that college debt.')
        break;
      default:
    }

    document.getElementById('player-profile').style.display = 'block'
    document.getElementById('char-choice').style.display = 'none'
  }

  useEffect(() => {
    const game = location.search.substring(6, 10)
    // console.log('game: ', game)
    // setGame(game)

    socket = io(ENDPOINT)

    socket.on('roomData', ({ users }) => {
      setUsers(users.filter(user => user.game === game))
    })
  }, [location]);

  return (
    <section className="Play-Game">
      <Email />
      <Link to="/game-over">
        <button className="admin-button">X</button>
      </Link>
      <main>
        <TeamLog users={users} />
        <section className="game-content"></section>
        <form id="char-choice" onSubmit={chooseMajor} className="char-choice">
          <p>Not the semester you imagined... but you still gotta study.
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
