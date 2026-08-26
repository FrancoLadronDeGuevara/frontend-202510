import { useEffect, useState } from "react";

const Ejemplo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Desde useEffect");
  }, [count]); //Array de dependencias

  return (
    <div>
      <span className="text-5xl">{count}</span>
      <button
        className="px-4 py-2 bg-blue-500 text-white"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Ejemplo;
