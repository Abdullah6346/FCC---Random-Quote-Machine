import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [randomquote, setrandomquote] = useState<{
    quote: string;
    author: string;
  }>();

  useEffect(() => {
    const getRandomQuote = async () => {
      const quotes = await GetQuote();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setrandomquote(quotes[randomIndex]);
    };
    getRandomQuote();
  }, []);

  const GetQuote = async () => {
    return fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json()) //2
      .then((quote) => {
        const quotes = quote.quotes;
        return quotes;
      });
  };

  const getRandomQuote = async () => {
    const quotes = await GetQuote();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setrandomquote(quotes[randomIndex]);
  };

  return (
    <>
      <div id="quote-box" className=" w-96 h-max bg-red-50">
        <div id="text" className="w-28 text-black">
          {randomquote?.quote}
        </div>
        <div id="author" className=" text-black">
          {randomquote?.author}
        </div>
        <button
          id="new-quote"
          onClick={async () => {
            await getRandomQuote();
          }}
        >
          New Quote
        </button>
        <a id="tweet-quote"></a>
      </div>
    </>
  );
}

export default App;
