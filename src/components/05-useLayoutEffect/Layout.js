import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  // const {state,increment} = useCounter
  const { author, quote } = !!data && data[0];
  console.log(data);
  console.log(author);
  console.log(quote);

  return (
    <div>
      <h6>Layout Effect</h6>
      <hr />

      <blockquote className="text-end blockquote">
        <p className="mb-8">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};
