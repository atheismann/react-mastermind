import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();
    // state is an object that holds
    // the info for our app
    this.state = {
      selColorIdx: 0,
      // For development, let's initialize with two guess objects
      guesses: [this.getNewGuess(), this.getNewGuess()],
      code: this.genCode()
    };
  }

  genCode() {
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
  }

  getNewGuess() {
    return {
      // TODO: for development/testing purposes
      // code: [null, null, null, null],
      code: [3, 2, 1, 0],
      score: {
        perfect: 0,
        almost: 0,
      }
    };
  }

  render() {
    return (
      <div className="App">
       <button onClick={() => 
          this.setState(state => ({selColorIdx: ++state.selColorIdx % 4}))
        }>
          Next color
        </button>
        Selected color: {colors[this.state.selColorIdx]}
        <header className="App-header">React Mastermind</header>
        <div className="flex-h">
          <GameBoard
            colors={colors}
            guesses={this.state.guesses}
          />
          <div>
            <ColorPicker
              colors={colors}
              selColorIdx={this.state.guesses}
            />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;