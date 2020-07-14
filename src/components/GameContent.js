import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import slides from '../slides.json'

const GameContent = () => {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)

  function submitAnswer(event) {
    event.preventDefault()
    if (index === slides.length - 1) {
      document.getElementById('game-content-form').style.display = 'none'
      document.getElementById('final-view').style.display = 'block'
      console.log('last question!')
    } else {
      const addPoints = points + parseInt(event.target.children[2].value)
      setPoints(addPoints)
      const incr = index + 1
      setIndex(incr)
    }
  }

  function onPlay(event) {
    event.preventDefault()

    document.getElementById('lets-play').style.display = 'none'
    document.getElementById('game-content-form').style.display = 'block'
  }

  return (
    <section className="game-content">
      <section id="lets-play">
        <p>Remember, your choices affect your whole team's outcome!<br />Are you ready?</p>
        <button onClick={onPlay}>Let's Play!</button>
      </section>
      <form id="game-content-form" onSubmit={submitAnswer}className="card">
        <h2>{slides[index].prompt.scene}</h2>
        <p>{slides[index].prompt.question}</p>
        <ol>
          <li>{slides[index].choices[2].answer}</li>
          <li>{slides[index].choices[1].answer}</li>
          <li>{slides[index].choices[0].answer}</li>
          <li>{slides[index].choices[4].answer}</li>
          <li>{slides[index].choices[3].answer}</li>
        </ol>
        <select id="majors" name="majors">
          <option value={2}>A</option>
          <option value={1}>B</option>
          <option value={0}>C</option>
          <option value={4}>D</option>
          <option value={3}>E</option>
        </select>
        <input type="submit"></input>
      </form>
      <section id="final-view">
        <Link to={`/game-over?game=QWER&points=${points}`}>
          <button>See Final Tally?</button>
        </Link>
      </section>
    </section>
  )
}

export default GameContent
