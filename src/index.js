import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import { Home, SetPlayer, PlayGame, GameOver, About } from './containers'
import './style.scss';

ReactDOM.render(
  <HashRouter basename='/'>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={SetPlayer} path="/set-player" />
      <Route component={PlayGame} path="/play" />
      <Route component={GameOver} path="/game-over" />
      <Route component={About} path="/about" />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
