import React, { useState } from 'react'

import slides from '../slides.json'

const GameContent = () => {
  const [index, setIndex] = useState(0)

  function submitAnswer(event) {
    event.preventDefault()
    if (index === slides.length - 1) {
      console.log('last question!')
    } else {
      const incr = index + 1
      setIndex(incr)
    }
  }

  return (
    <section className="game-content">
      <form onSubmit={submitAnswer}className="card">
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
    </section>
  )
}

export default GameContent
