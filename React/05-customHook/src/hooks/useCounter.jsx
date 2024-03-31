import { useState } from "react"

const useCounter = (initial) => {
    const [counter, setCounter] = useState(initial)

    const reset = () => {
        setCounter(() => 0)
    }

    const increase = () => {
        setCounter(counter => counter + 1)
    }

    const decrease = () => {
        setCounter(counter => counter - 1)
    }

    return {
        counter,
        reset,
        increase,
        decrease
    }
}

export default useCounter