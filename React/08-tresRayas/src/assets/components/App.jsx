import '../css/style.css'

import Cell from './Cell'
import { useState } from 'react'

const TURNS = {
    x: "X",
    o: "O"
}

const App = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.x)
    const [winer, setWiner] = useState(null)

    const updateBoard = (index) => {
        if (board[index]) return

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        const result = checkWiner(newBoard, index)
        const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
        setTurn(newTurn)

    }

    const checkWiner = (board, index) => {
        // console.log(index);
        console.log(board);
        let hozRight = checkHorizRigth(board, index);
        let hozIzq = checkHorizLeft(board, index);
        let vertical = checkVertical(board);
        let diagonalMain = checkDiagonalMain(board, index);
        let diagonalSecondary = checkDiagonalSecondary(board, index);

        console.log('gana derecha', hozRight)
        console.log('gana izquierda', hozIzq)
        console.log('gana vertical', vertical)
        console.log('gana diagonal main', diagonalMain)
        console.log('gana diagonal secondary', diagonalSecondary)
    }

    const checkHorizRigth = (board, index) => {
        const letter = board[index]
        let counter = 0
        for (let i = index; (i < board.length) && (i <= index + 2); i++) {
            if (letter == board[i]) counter++
        }

        if (counter == 3) return true
    }

    const checkHorizLeft = (board, index) => {
        const letter = board[index]
        let counter = 0
        for (let i = index; (i >= 0) && (i >= index - 2); i--) {
            if (letter == board[i]) counter++
        }

        if (counter == 3) return true
    }

    const checkVertical = (board) => {
        for (let col = 0; col < 3; col++) {
            const cell1 = board[col];
            const cell2 = board[col + 3];
            const cell3 = board[col + 6];

            if (cell1 && cell1 === cell2 && cell2 === cell3) return true
        }
    }

    const checkDiagonalMain = (board, index) => {
        let letter = board[index]
        let counter = 0
        for (let i = 0; i < board.length; i += 4) {
            if (letter == board[i]) counter++
            console.log('bucle 2')
        }

        if (counter == 3) return true

    }

    const checkDiagonalSecondary = (board, index) => {
        let letter = board[index]
        let counter = 0
        for (let i = 2; i < board.length ; i += 2) {
            if (letter == board[i]) counter++
            console.log('bucle 2')
        }
        if (counter == 3) return true
    }

    return (
        <main>
            <h1>Tic tac toe</h1>
            <section>
                {
                    board.map((_, index) => {
                        return (
                            <Cell
                                index={index}
                                key={index}
                                updateBoard={updateBoard}
                            >
                                {board[index]}
                            </Cell>
                        )
                    })
                }
            </section>
            <section>
                <Cell isSelected={turn === TURNS.x}>{TURNS.x}</Cell>
                <Cell isSelected={turn === TURNS.o}>{TURNS.o}</Cell>
            </section>
        </main>
    )
}

export default App;