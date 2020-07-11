import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import SetPlayer from './SetPlayer'
import PlayGame from './PlayGame'
import GameOver from './GameOver'

export default function Root() {
  return (
    <>
      <h1>I AM ROOT</h1>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={SetPlayer} path="/set-player" />
        <Route component={PlayGame} path="/play" />
        <Route component={GameOver} path="/game-over" />
      </Switch>
    </>
  )
}
