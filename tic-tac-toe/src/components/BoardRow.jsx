const BoardRow = () => {
    return (<div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleCLick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleCLick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleCLick(2)} />
  </div>)
}

export default BoardRow
