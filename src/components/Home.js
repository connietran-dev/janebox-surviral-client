import React from 'react'
import { Link } from 'react-router-dom'
import { subscribeToTimer } from '../api'


class Home extends React.Component {
  state = {
    timestamp: ''
  }

  constructor(props) {
    super(props)
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }))
  }

  render() {
    return (
      <section className="Home">
      <h1>S u r <span>V i r a l</span></h1>
      <p>Your university's abandoned you..<br /> a virus is on the loose..<br /> and your
      friends are all you have</p>
      <p><em>Do you have what it takes to make it
      out alive?</em></p>
      <section className="menu">
        <Link className="menu-opt" to="/set-player">
          <button className="admin-button">New Game</button>
        </Link>
        <form className="menu-opt">
          <input className="input-field" type="text" />
          <Link to="/set-player">
            <input className="admin-button" type="submit" value="Join Game"/>
          </Link>
        </form>
        <div>
          <p>{this.state.timestamp}</p>
        </div>
      </section>
    </section>
    );
  }
}

export default Home