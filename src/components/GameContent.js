import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import slides from '../slides.json'

export const GameContent = () => {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [sass, setSass] = useState('')

  function submitAnswer(event) {
    event.preventDefault()

    const val = event.target.children[0].value
    const subtext = slides[index].choices[val].subtext
    const score = slides[index].choices[val].point

    getSassy(subtext, score)

    if (index === slides.length - 1) {
      document.getElementById('game-content').style.display = 'none'
      document.getElementById('final-view').style.display = 'block'
    } else {
      const addPoints = points + score
      setPoints(addPoints)
      const incr = index + 1
      setIndex(incr)
    }
  }

  function onPlay(event) {
    event.preventDefault()

    document.getElementById('lets-play').style.display = 'none'
    document.getElementById('game-content').style.display = 'block'
  }

  function getSassy(subtext, score) {

    switch(score) {
      case 2:
      case 3:
        setSass(`${subtext} You earn ${score} points!`)
        break;
      case 1:
        setSass(`${subtext} You earn ${score} point.`)
        break;
      case -1:
        setSass(`${subtext} You lose ${Math.abs(score)} point.`)
        break;
      case -2:
      case -3:
        setSass(`${subtext} You lose ${Math.abs(score)} points!`)
        break;
      default:
        setSass(`${subtext} You earn nothing.`)
    }
    document.getElementById('sassy-modal').style.display = 'block'
  }

  function byeSass(event) {
    event.preventDefault()

    document.getElementById('sassy-modal').style.display = 'none'
  }

  return (
    <section className="game-content">
      <aside id="sassy-modal" onClick={byeSass}>
        <p className="sass">{sass}</p>
        <p className="glow">Click screen to close</p>
      </aside>
      <section id="lets-play">
        <p>Remember, your choices affect your whole team's outcome!<br />Are you ready?</p>
        <button onClick={onPlay}>Let's Play!</button>
      </section>
      <section id="game-content" className="card">
        <h2>{slides[index].prompt.scene}</h2>
        <p>{slides[index].prompt.question}</p>
        <ol>
          <li>{slides[index].choices[0].answer}</li>
          <li>{slides[index].choices[1].answer}</li>
          <li>{slides[index].choices[2].answer}</li>
          <li>{slides[index].choices[3].answer}</li>
          <li>{slides[index].choices[4].answer}</li>
        </ol>
        <form id="game-content-form" onSubmit={submitAnswer}>
          <select id="majors" name="majors">
            <option value={0}>A</option>
            <option value={1}>B</option>
            <option value={2}>C</option>
            <option value={3}>D</option>
            <option value={4}>E</option>
          </select>
          <input type="submit"></input>
        </form>
      </section>
      <section id="final-view">
        <Link to={`/game-over?game=QWER&points=${points}`}>
          <button>Seal your fate</button>
        </Link>
      </section>
    </section>
  )
}
