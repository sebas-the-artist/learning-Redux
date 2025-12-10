import { useState } from "react";
import Counter2 from "./Counter2";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/CounterSlice";
import { useGetAllPostsQuery, useGetPostsbyIdQuery } from "../redux/postSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  /* 
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.count;
  }); 
  */
  //console.log(useGetAllPostsQuery());
  //const { data, isLoading, isError } = useGetAllPostsQuery();
  const { data, isLoading, isError } = useGetPostsbyIdQuery(5);

  return (
    <div>
      {JSON.stringify(data)}
      <h1>Count Is {count}</h1>
      <div>
        {/* <button onClick={() => dispatch(decrementByAmount(17))}>
          down by 17
        </button> */}
        <button onClick={() => dispatch(decrement())}>DEOWN</button>
        <button onClick={() => dispatch(increment())}>UHHP</button>
        <button onClick={() => dispatch(incrementByAmount(21.25))}>
          up by 21
        </button>
      </div>
    </div>
  );
}
