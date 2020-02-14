import React, {Component} from 'react';
import '../css/Stopwatch.css';

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            previousElapsedTime: 0,
            currentElapsedTime: 0,
            startTime: 0,
            interval: null
        }
    }

    startTimer = () => {
        this.setState({
            startTime: Date.now(),
            interval: setInterval(this.updateTime, 10)
        });
    }

    updateTime = () => {
        this.setState({
            currentElapsedTime: Date.now() - this.state.startTime
        });
    }

    stopTimer = () => {
        if (this.state.interval) {
            clearInterval(this.state.interval);
        }
        this.setState({
            previousElapsedTime: this.state.previousElapsedTime + this.state.currentElapsedTime,
            currentElapsedTime: 0,
            startTime: 0,
            interval: null
        });
    }

    clearTimer = () => {
        if (this.state.interval) {
            clearInterval(this.state.interval);
        }
        this.setState({
            previousElapsedTime: 0,
            currentElapsedTime: 0,
            startTime: 0,
            interval: null
        });
    }

    render(){
        let displayTime = this.state.previousElapsedTime + this.state.currentElapsedTime;
        let hh = (displayTime / 3600000).toFixed(0);
        let mm = (displayTime / 60000).toFixed(0);
        let ss = (displayTime / 1000).toFixed(0);
        let ms = displayTime % 1000;
        return(
            <div className="stopwatch">
                <h1>Stopwatch</h1>
                <h4>Hours:{hh}</h4>
                <h4>Minutes:{mm}</h4>
                <h4>Seconds:{ss}</h4>
                <h4>Milliseconds:{ms}</h4>

                <h2>{displayTime}</h2>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.clearTimer}>Clear</button>
            </div>
        );
    }
  }

export default Stopwatch;