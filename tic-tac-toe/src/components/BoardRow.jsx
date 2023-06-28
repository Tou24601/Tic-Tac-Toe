import Square from "./Square";

const BoardRow = ({numbers}) => {

  const squaresContainer = numbers.map((item) => {
    return <Square number={item} />
  })

    return (<div className="board-row">
{squaresContainer}
  </div>)
}

export default BoardRow
