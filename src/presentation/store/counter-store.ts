import { create } from "zustand"

export interface CounterState {
    count: number
    increment: (value: number) => void
    decrement: (value: number) => void
}


export const useCounterStore = create<CounterState>()((set, get) => ({
    count: 0,
    increment: (value: number) => set((state) => ({ count: state.count + value })),
    decrement: (value: number) => set((state) => ({ count: state.count - value })),
}))