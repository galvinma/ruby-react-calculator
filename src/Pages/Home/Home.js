import React from 'react'
import axios from 'axios';

// CSS
import './Home.css'

class Home extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      answer: 0,
      entries: [],
    };

    this.getAnswer = this.getAnswer.bind(this)
    this.handleEntry = this.handleEntry.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.mapEntries = this.mapEntries.bind(this)
  }

  getAnswer()
  {

    console.log("Getting")
    axios.post('http://127.0.0.1:4567/api/answer', {
      params: {
        entries: this.state.entries
      }
    })
    .then((response) => {
      this.setState({
        answer: response.data.answer
      })
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  handleEntry(value)
  {
    this.setState({
      entries: this.state.entries.concat([value])
    })
  }

  handleClear()
  {
    this.setState({
      entries: [],
      answer: 0,
    })
  }

  mapEntries(entry)
  {
    return(
      <div>{entry}</div>
    )
  }

  render() {
    return (
      <div>
        <div className="content-container">
          <div className="entries-container">{this.state.entries.map(this.mapEntries)}</div>
          <div className="answer-container">{this.state.answer}</div>
          <div className="input-container">
            <div className="input-row">
              <div className="input-button" onClick={(e) => this.handleEntry("7")}>7</div>
              <div className="input-button" onClick={(e) => this.handleEntry("8")}>8</div>
              <div className="input-button" onClick={(e) => this.handleEntry("9")}>9</div>
              <div className="input-button" onClick={(e) => this.handleEntry("x")}>x</div>
            </div>
            <div className="input-row">
              <div className="input-button" onClick={(e) => this.handleEntry("4")}  value="4">4</div>
              <div className="input-button" onClick={(e) => this.handleEntry("5")}  value="5">5</div>
              <div className="input-button" onClick={(e) => this.handleEntry("6")}  value="6">6</div>
              <div className="input-button" onClick={(e) => this.handleEntry("/")}  value="/">/</div>
            </div>
            <div className="input-row">
              <div className="input-button" onClick={(e) => this.handleEntry("1")}  value="1">1</div>
              <div className="input-button" onClick={(e) => this.handleEntry("2")}  value="2">2</div>
              <div className="input-button" onClick={(e) => this.handleEntry("3")}  value="3">3</div>
              <div className="input-button" onClick={(e) => this.handleEntry("-")}  value="-">-</div>
            </div>
            <div className="input-row">
              <div className="input-button" onClick={(e) => this.handleEntry("0")}  value="0">0</div>
              <div className="input-button" onClick={this.handleClear}>CLR</div>
              <div className="input-button" onClick={this.getAnswer}>=</div>
              <div className="input-button" onClick={(e) => this.handleEntry("+")}  value="+">+</div>
            </div>
          </div>
        </div>
      </div>
  )}
}

export default (Home)
