import React, { Component } from 'react';
import './App.css';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date(), wakeUpTime: 'Print element', alarm: ''};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.setAlarm = this.setAlarm.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState(state => ({wakeUpTime: 'Print element'}));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  handleClick() {
    this.setAlarm();
    //this.setState(state => ({alarm: "test"}));
  }

  setAlarm() {

    // get input string
    var area = document.getElementById("input");
    var str = area.value // here we got value

    //perform processing


    //output string
    document.getElementById("output").value = str;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.wakeUpTime}</button>
        <div class='row'>
          <div class='column'>
            <div class='column-header'>
              <span><h4>Input</h4></span>
            </div>
          </div>
          <div class='column'>
            <div class='column-header'>
              <span><h4>Output</h4></span>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='column'>
            <div class='main-column'>
              <textarea id="input" rows="" cols="" placeholder="Your .json object goes here"> 

               </textarea>
            </div>
          </div>
          <div class='column'>
            <div class='main-column'>
              <textarea id="output" rows="" cols="" placeholder="Output is generated here"> 


               </textarea>
            </div>
          </div>
        </div>
      </div>

      )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
