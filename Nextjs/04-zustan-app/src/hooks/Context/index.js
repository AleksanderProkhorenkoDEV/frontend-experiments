import { create } from 'zustand'

const useStore = create((set) => ({
  counter:0,
  increaseCounter: () => set((state) => ({counter : state.counter + 1})),
  decraseCounter:  () => set((state) => ({counter : state.counter - 1})),
  resetCounter:    () => set((state) => ({counter: state.counter = 0}))
}))

export default useStore