import "./App.css";

function App() {
  const handlechange = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const quotes = await response.json();
      console.log(quotes.quotes);
    } catch (error) {
      return `Error Parsing DATA 205 ${error}`;
    }
  };
  return (
    <>
      <div id="quote-box" className=" w-96 h-max bg-red-50">
        <div id="text" className="w-28 text-black">
          HEY I am THE Quote
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
// 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
