import React from "react";
import { ref, useSetup } from "reactivue";

const useCounter = () =>
  useSetup(() => {
    const count = ref(0);
    const increment = () => count.value++;
    const decrement = () => count.value--;
    const reset = () => (count.value = 0);
    return { count, increment, decrement, reset };
  });

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <section>
      <div>{count}</div>
      <div>
        <button type="button" onClick={() => increment()}>
          increment
        </button>
        <button type="button" onClick={() => reset()}>
          reset
        </button>
        <button type="button" onClick={() => decrement()}>
          decrement
        </button>
      </div>
    </section>
  );
};

export default Counter;
