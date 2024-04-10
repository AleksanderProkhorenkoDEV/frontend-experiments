import { useState } from 'react'
import Winner from './Winner'
import '../css/style.css'
import Cell from './Cell'

const TURNS = {
    x: "X",
    o: "O"
}

const App = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.x)
    const [winer, setWiner] = useState(null)

    const updateBoard = (index) => {
        if (board[index] || winer) return

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        const result = checkWiner(newBoard, index)

        if (result) {
            setWiner(result)
        }else if(checkEndGame(newBoard)){
            setWiner(false)
        }

        const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
        setTurn(newTurn)


    }

    const checkWiner = (newboard, index) => {

        let hozRight = checkHorizRight(newboard, index);
        let hozIzq = checkHorizLeft(newboard, index);
        let vertical = checkVertical(newboard);
        let diagonalMain = checkDiagonalMain(newboard);
        let diagonalSecondary = checkDiagonalSecondary(newboard);

        if (hozIzq || hozRight || vertical || diagonalMain || diagonalSecondary) {
            return newboard[index];
        } else {
            return null
        }
    }
    const checkEndGame = (newBoard) => {
        return newBoard.every( (cells) => cells != null)
    }
    const checkHorizRight = (board, index) => {
        const letter = board[index];
        let counter = 1; // Empezamos en 1 porque ya tenemos una marca en el índice actual
        let currentIndex = index + 1; // Comenzamos a verificar desde el siguiente índice
    
        // Verificar hacia la derecha
        while (currentIndex % 3 !== 0) { // Mientras no alcancemos el final de la fila
            if (board[currentIndex] === letter) {
                counter++;
                if (counter === 3) return true; // Si encontramos tres marcas consecutivas, es una línea ganadora
            } else {
                return // Si encontramos una marca diferente, detenemos la verificación en esta dirección
            }
            currentIndex++;
        }
    
        return false; // No hay línea ganadora en esta dirección
    };
    
    const checkHorizLeft = (board, index) => {
        const letter = board[index];
        let counter = 1; // Empezamos en 1 porque ya tenemos una marca en el índice actual
        let currentIndex = index - 1; // Comenzamos a verificar desde el índice anterior
    
        // Verificar hacia la izquierda
        while (currentIndex % 3 !== 2) { // Mientras no alcancemos el inicio de la fila
            if (board[currentIndex] === letter) {
                counter++;
                if (counter === 3) return true; // Si encontramos tres marcas consecutivas, es una línea ganadora
            } else {
                return // Si encontramos una marca diferente, detenemos la verificación en esta dirección
            }
            currentIndex--;
        }
    
        return false; // No hay línea ganadora en esta dirección
    };
    const checkVertical = (board) => {
        for (let col = 0; col < 3; col++) {
            const cell1 = board[col];
            const cell2 = board[col + 3];
            const cell3 = board[col + 6];

            if (cell1 && cell1 === cell2 && cell2 === cell3) return true
        }
    }

    const checkDiagonalMain = (board) => {
        const diagonal = [board[0], board[4], board[8]];
        const firstCell = diagonal[0];
        if (!firstCell) return false; // La diagonal secundaria está vacía
        return diagonal.every(cell => cell === firstCell);

    }

    const checkDiagonalSecondary = (board) => {
        const diagonal = [board[2], board[4], board[6]];
        const firstCell = diagonal[0];
        if (!firstCell) return false; // La diagonal secundaria está vacía
        return diagonal.every(cell => cell === firstCell);
    }

    const resetBoard = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.x)
        setWiner(null)
    }

    return (
        <main className='padre-modal'>
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
            {
                winer != null && <Winner

                    winner={winer}
                    resetBoard={resetBoard}
                />
            }
        </main>
    )
}

export default App;