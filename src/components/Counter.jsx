import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count Is {count}</h1>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          UHHP
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          DEOWN
        </button>
      </div>
    </div>
  );
}
