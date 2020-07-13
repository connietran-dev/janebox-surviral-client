import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import Prompt from './Prompt'
import prompts from '../prompts.json'

export default function PlayGame() {
  const [promptIndex, setPromptIndex] = useState(0)

  const currentPrompt = prompts[promptIndex]
  console.log(currentPrompt)

  function toggleTeamLog() {
    var x = document.getElementById('players-ul')
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <section className="Play-Game">
      <Link to="/game-over">
        <button className="admin-button">X</button>
      </Link>
      <main>
        <section className="team-log">
          <div className="team-log-btn" onClick={toggleTeamLog}>
            <h5>Team Log</h5>
            <p>+</p>
          </div>
          <ul id="players-ul">
            <li>Connie: 40pts</li>
            <li>Sam: 27pts</li>
            <li>Nick: 34pts</li>
          </ul>
        </section>
        <section className="game-content">
          <Prompt 
            question={currentPrompt}
          />
        </section>
        <section className="player-profile">
          <img src="" alt="" />
          <section className="char-descrip">
            <h3>The Engineer</h3>
            <p>You’ll be responsible for rebuilding a whole new world…
          Sounds like a lot of work.</p>
          </section>
        </section>
      </main>
    </section>
  )
}
