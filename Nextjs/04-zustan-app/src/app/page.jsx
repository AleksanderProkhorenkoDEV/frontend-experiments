"use client"

import useStore from "@/hooks/Context"

export default function Home() {

  const increaseCounter = useStore((state) => state.increaseCounter)

  const decreaseCounter = useStore((state) => state.decraseCounter)

  const resetCounter = useStore((state) => state.resetCounter)

  const counter = useStore((state) => state.counter)

  const handlerIncrease = () => {
    increaseCounter()
  }

  const handlerDecrease = () => {
    decreaseCounter()
  }

  const handlerReset = () => {
    resetCounter()
  }
  return (
    <main>
      <h1>Counter: {counter}</h1>
      <button onClick={handlerIncrease}>Increase Context Counter</button>
      <button onClick={handlerDecrease}>Decrase Context Counter</button>
      <button onClick={handlerReset}>Reset Context Counter</button>
    </main>
  );
}
