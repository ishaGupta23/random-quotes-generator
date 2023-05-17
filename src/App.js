import React, { useState } from 'react';

const quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  "Quote 4",
  "Quote 5",
  "Quote 6",
  "Quote 7",
  "Quote 8",
  "Quote 9",
  "Quote 10"
];

const App = () => {
  const [randomQuote, setRandomQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <button onClick={generateRandomQuote}>Generate Quote</button>
      {randomQuote && <p>{randomQuote}</p>}
    </div>
  );
};

export default App;
