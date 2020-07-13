import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import SetPlayer from './SetPlayer'
import PlayGame from './PlayGame'
import GameOver from './GameOver'
import About from './About'

function App() {
  return (
    <>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={SetPlayer} path="/set-player" />
        <Route component={PlayGame} path="/play" />
        <Route component={GameOver} path="/game-over" />
        <Route component={About} path="/about" />
      </Switch>
    </>
  )
}

export default App;
