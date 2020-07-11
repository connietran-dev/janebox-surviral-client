import React from 'react'
// import socketIOClient from "socket.io-client"

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import SetPlayer from './SetPlayer'
import PlayGame from './PlayGame'
import GameOver from './GameOver'

// const ENDPOINT = 'http://127.0.0.1:8080'

function App() {
  // const [response, setResponse] = useState("");

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);

  return (
    <>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={SetPlayer} path="/set-player" />
        <Route component={PlayGame} path="/play" />
        <Route component={GameOver} path="/game-over" />
      </Switch>
    </>
  )
}

export default App;
