function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
      {/* onClick tells react to render props passed to onclick */}
        {props.value}
        {/* renders prop data */}
        {/* onClick calls handleClick() */}
        {/* handleClick sets prop of square to state of board */}
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true
      };
    //   makes state an object for multiple components
    // calls component square
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'x' : 'o'
    //   question mark is a truthly falsey boolean statemeant
      this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext
    //   flips the value of boolean
        });

      
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o');
    //   displays prop to render to state
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  