import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);

  async function getQuote() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    // return data;
    setQuote(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getQuote();
  }, []);

  return (
    <div>
      <h1>quotePage</h1>
      <button onClick={getQuote}>Get quote</button>
      {/* <p style={{ height: "16px" }}>
        {count === 0
          ? "No quotes yet"
          : `${count === 1 ? `${count} quote` : `${count} quotes`}`}
      </p> */}
      simple-app/src/App.tsx
      <CountPar count={count} />
      <Message quote={quote} />
    </div>
  );
}

type MessageProps = {
  // count: number;
  quote: string;
};

function Message({ quote }: MessageProps) {
  return <p style={{ height: "16px" }}>{quote}</p>;
}

type CountProps = {
  count: number;
  // quote: string;
};

function CountPar({ count }: CountProps) {
  return (
    <p style={{ height: "16px" }}>
      {count === 0
        ? "No quotes yet"
        : `${count === 1 ? `${count} quote` : `${count} quotes`}`}
    </p>
  );
}
