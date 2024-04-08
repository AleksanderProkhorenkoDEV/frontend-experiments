const Cell = ({children, index, isSelected, updateBoard}) => {

    const handlerClick = () =>{
        updateBoard(index)
    }

    return (
        <div className={(isSelected) ? 'cell active' : 'cell'} onClick={handlerClick}>
            {children}
        </div>
    )
}

export default Cell