"use client";
import React from "react";
import { useCounterStore } from "./stores/counterStore";

const Home = () => {
  const counter = useCounterStore((state) => state.counter);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <h1 className="text-center">Counter: {counter}</h1>
        <button onClick={increase} className="border border-white px-4 py-2">
          Increase
        </button>
        <button onClick={decrease} className="border border-white px-4 py-2">
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Home;
