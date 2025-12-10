import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";

export default function Counter2() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This Is Counter Too {}</h1>
      <button onClick={() => dispatch(increment(10))}>UHHP</button>
      <button onClick={() => dispatch(decrement(10))}>DEOWN</button>
    </div>
  );
}
