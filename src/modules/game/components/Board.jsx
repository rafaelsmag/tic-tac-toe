import React, { Component } from 'react'
import Square from './Square'

class Board extends Component {
  render () {
    return (
      <div>
        <div className='board-row'>
          <Square
          />
        </div>
      </div>
    )
  }
}

export default Board
