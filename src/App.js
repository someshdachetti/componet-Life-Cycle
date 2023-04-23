import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    ShowClock: false,
  }

  clock = () => {
    const {ShowClock} = this.state

    this.setState(prevState => ({ShowClock: !prevState.ShowClock}))
  }

  render() {
    const {ShowClock} = this.state
    return (
      <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.clock}>
          {ShowClock ? 'hide Clock' : 'Show clock'}
        </button>
        {ShowClock && <Clock />}
      </div>
    )
  }
}

export default App
