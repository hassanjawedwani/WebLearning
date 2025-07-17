import { create } from "zustand";

type CounterStore = {
  counter: number;
  increase: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increase: () => {
    set((state) => ({ counter: state.counter + 1 }));
  },
  decrease: () => {
    set((state) => ({ counter: state.counter - 1 }));
  },
}));
