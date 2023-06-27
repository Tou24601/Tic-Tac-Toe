import Square from "./Square";
import Winner from "./Winner";

export default function Board({ xIsNext, squares, onPlay }) {

  const handleCLick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div>
      <div className="box">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleCLick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleCLick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleCLick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleCLick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleCLick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleCLick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleCLick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleCLick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleCLick(8)} />
        </div>
      </div>
      <Winner status={status} />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
