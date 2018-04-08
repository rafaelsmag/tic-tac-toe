import React, { Component } from 'react'
import Board from './Board'

class Game extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: false
  }

  handleClick = (i) => {
    const { xIsNext } = this.state
    const squares = [...this.state.squares]
    squares[i] = xIsNext ? 'X' : 'O'
    this.setState({ squares, xIsNext: !xIsNext })
  }

  render () {
    const { squares } = this.state
    return (
      <div className="game">
        <div classNAme="game-board">
          <Board
            squares={squares}
            onClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default Game
