import "./App.css";
import { useState } from "react";

function App() {
  const [randomquote, setrandomquote] = useState("");
  const GetQuote = async () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json()) //2
      .then((quote) => {
        console.log(quote.quotes); //3
      });
  };
  console.log(GetQuote());
  const handlechange = async () => {};
  return (
    <>
      <div id="quote-box" className=" w-96 h-max bg-red-50">
        <div id="text" className="w-28 text-black">
          {randomquote}
        </div>
        <div id="author"></div>
        <button id="new-quote" onClick={handlechange}>
          New Quote
        </button>
        <a id="tweet-quote"></a>
      </div>
    </>
  );
}

export default App;
