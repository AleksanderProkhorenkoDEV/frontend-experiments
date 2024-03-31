import '../assets/style.css'
import useCounter from "../hooks/useCounter.jsx"

const App = () => {
    const { counter, reset, decrease, increase } = useCounter(0)

    return (
        <>  
            <p>The counter functionality is grouped in a single hook and we pass it to the App component</p>
            <main>
                {counter}
                <div>
                    <button onClick={reset}>Reset</button>
                    <button onClick={increase}>Increase</button>
                    <button onClick={decrease}>Decrease</button>
                </div>
            </main>
        </>
    )
}

export default App