import { useEffect, useState } from "react"
import Button from "./Button"
const App = () => {
    const [counter, setCounter] = useState(0)
    const [counter_useEffect, setCounter_useEffect] = useState(0)

    useEffect( ()=>{
        setCounter_useEffect(counter)
    }, [counter])

    return (
        <>
            <h1>Learning to use hooks</h1>
            <p>Counter now is: {counter_useEffect}</p>
            <Button 
                updateCounter={setCounter}
                counter={counter}
            />
        </>
    )
}

export default App