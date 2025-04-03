import { ReactElement, useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);

  async function getQuote() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

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
      <Message count={count} quote={quote} />
    </div>
  );
}

interface MessageProps {
  count: number;
  quote: string;
}

// alt syntax - JSX from React
// function Message(props: MessageProps): JSX.Element {
function Message(props: MessageProps): ReactElement {
  return (
    <div>
      <p style={{ height: "16px" }}>{props.quote}</p>
      <p style={{ height: "16px" }}>
        {props.count === 0
          ? "No quotes yet"
          : `${
              props.count === 1
                ? `${props.count} quote`
                : `${props.count} quotes`
            }`}
      </p>
    </div>
  );
}
