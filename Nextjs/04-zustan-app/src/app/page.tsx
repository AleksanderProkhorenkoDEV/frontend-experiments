'use client'

import { useCounterStore } from "@/providers/counter-store-provider";

export default function Home() {

  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[350px] shadow-lg rounded-lg m-auto mt-16 p-4 bg-gradient-to-r from-stone-500 to-stone-700 text-white">
      <p>Count: {count}</p>
      <div className="flex gap-2">
        <button type="button" onClick={incrementCount} className="border border-blue-600 rounded-lg p-2">
          Increment Count
        </button>
        <button type="button" onClick={decrementCount} className="border border-red-600 rounded-lg p-2">
          Decrement Count
        </button>
      </div>
    </div>
  );
}
