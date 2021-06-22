import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";
export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  // const {state,increment} = useCounter
  const { quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState({});
  console.log(data);
  console.log(quote);
  const pTag = useRef();
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h6>Layout Effect</h6>
      <hr />

      <blockquote className="text-end blockquote">
        <p className="mb-8" ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};
