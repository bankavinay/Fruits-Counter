import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoIncrese = () => {
    const {count1} = this.state
    this.setState(prevCount => ({count1: prevCount + 1}))
  }

  bananaIncrese = () => {
    const {count2} = this.state
    this.setState(prevCount => ({count2: prevCount + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button onClick={this.mangoIncrese}>Eat Mango</button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button onClick={this.bananaIncrese}>Eat Banana</button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
