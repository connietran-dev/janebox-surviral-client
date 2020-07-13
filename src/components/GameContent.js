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
        <p>Remember, your choices affect your whole teams outcome!<br />Are you ready?</p>
        <button onClick={onPlay}>Let's Play!</button>
      </section>
      <form id="game-content-form" onSubmit={submitAnswer}className="card">
        <h2>{slides[index].prompt.scene}</h2>
        <p>{slides[index].prompt.question}</p>
        <select id="majors" name="majors">
          <option value={2}>{slides[index].choices[2].answer}</option>
          <option value={1}>{slides[index].choices[1].answer}</option>
          <option value={0}>{slides[index].choices[0].answer}</option>
          <option value={4}>{slides[index].choices[4].answer}</option>
          <option value={3}>{slides[index].choices[3].answer}</option>
        </select>
        <input type="submit"></input>
      </form>
      <section id="final-view">
        <p>Time to see how y'all did...</p>
        <Link to={`/game-over?game=QWER&points=${points}`}>
          <button>Check Tally</button>
        </Link>
      </section>
    </section>
  )
}

export default GameContent
