const Winner = ({resetBoard, winner}) => {

    const handlerClick = () => {
        resetBoard()
    }

    return(
        <div className="modal">
            <h1>{(winner) ?'You win the game' : 'Nobody won the game'}</h1>
            <p className="winner">{'The winner is: '}<span className="cell active">{winner}</span></p>
            <button onClick={handlerClick}>Reset the board</button>
        </div>
    )
}

export default Winner