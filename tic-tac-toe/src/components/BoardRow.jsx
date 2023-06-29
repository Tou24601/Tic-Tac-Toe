import Square from "./Square";

const BoardRow = ({numbers, handleNumber}) => {

  const squaresContainer = numbers.map((item) => {
    handleNumber(item)
    return <Square number={item} />
  })

    return (<div className="board-row">
{squaresContainer}
  </div>)
}

export default BoardRow
