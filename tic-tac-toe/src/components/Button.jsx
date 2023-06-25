const Button = ({handleButtonClick, buttonValue}) => {
    return <button onClick={handleButtonClick} className="button">{buttonValue}</button>
}

export default Button;