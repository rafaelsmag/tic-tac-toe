import React, { Component } from 'react'
import Board from './Board'

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let line of lines) {
    const [ a, b, c ] = line
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

class Game extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: false,
    winner: null
  }

  initialState = { ...this.state }

  handleClick = (i) => {
    const { xIsNext } = this.state
    const squares = [...this.state.squares]
    squares[i] = xIsNext ? 'X' : 'O'

    const winner = calculateWinner(squares)
    if (this.state.squares[i]) {
      return
    }
    if (winner) {
      if (!this.state.winner) {
        this.setState({ winner, squares })
      }
      return
    }

    this.setState({ squares, xIsNext: !xIsNext })
  }

  handleRestartClick = () => {
    this.setState(this.initialState)
  }

  render () {
    const { squares, winner } = this.state
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            onClick={this.handleClick}
            winner={winner}
          />
        </div>
        { winner &&
          <div>
            <h1 className="message-info">'{winner}' venceu!</h1>
            <button onClick={this.handleRestartClick}>Recomeçar</button>
          </div>

        }
      </div>
    )
  }
}

export default Game
