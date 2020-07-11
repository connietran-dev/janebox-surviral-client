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
        <h1>S u r V i r a l</h1>
        <p>Your university's abandoned you.. a virus is on the loose.. and your
        friends are all you have<br /> <em>Do you have what it takes to make it
        out alive?</em></p>
        <nav>
          <Link to="/set-player">
            <button>New Game</button>
          </Link>
          <form>
            <input type="text" />
            <Link to="/set-player">
              <input type="submit" value="Join Game" />
            </Link>
          </form>
          <div>
            <p>
              {this.state.timestamp}
            </p>
          </div>
        </nav>
      </section>
    );
  }
}

export default Home