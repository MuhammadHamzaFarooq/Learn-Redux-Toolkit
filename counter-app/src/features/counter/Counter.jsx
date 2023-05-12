import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  reset,
} from "./counterSlice";

const Counter = () => {
  const [isInputIncrement, setIsInputIncrement] = useState(false);
  const [isInputDecrement, setIsInputDecrement] = useState(false);
  const [incrementByValue, setIncrementByValue] = useState(0);
  const [decrementByValue, setDecrementByValue] = useState(0);
  const count = useSelector((state) => state.counter.count);
  console.log("count =>", count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count : {count}</h3>
      <div
        style={{
          margin: 20,
        }}
      >
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div
        style={{
          margin: 20,
        }}
      >
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <div
        style={{
          margin: 20,
        }}
      >
        {isInputIncrement ? (
          <input
            type="number"
            name=""
            id=""
            value={incrementByValue}
            onChange={(e) => setIncrementByValue(Number(e.target.value))}
          />
        ) : null}
      </div>

      <button
        onClick={() => {
          setIsInputIncrement(!isInputIncrement);
          dispatch(incrementBy(incrementByValue));
        }}
      >
        IncrementBy
      </button>
      <div
        style={{
          margin: 20,
        }}
      >
        {isInputDecrement ? (
          <input
            type="number"
            name=""
            id=""
            value={decrementByValue}
            onChange={(e) => setDecrementByValue(Number(e.target.value))}
          />
        ) : null}
      </div>
      <button
        onClick={() => {
          setIsInputDecrement(!isInputDecrement);
          dispatch(decrementBy(decrementByValue));
        }}
      >
        DecrementBy
      </button>
      <div
        style={{
          margin: 10,
        }}
      >
        <button
          onClick={() => {
            setIncrementByValue(0);
            setDecrementByValue(0);
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
