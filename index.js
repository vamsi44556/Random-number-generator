// Write your code here
import Component from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  ranN = () => {
    const n = Math.ceil(Math.random() * 100)
    this.setState({count: n})
  }

  render() {
    const {count} = this.state
    return (
      <div className="can">
        <div className="card">
          <h1 className="hh">Random number</h1>
          <p className="pp">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="bb" type="button" onClick={this.ranN}>
            Generate
          </button>
          <p className="hh">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
