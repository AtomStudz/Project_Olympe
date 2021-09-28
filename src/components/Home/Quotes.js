// == Import npm
import React from 'react';

// == Import data
import quotes from 'src/data/quotes';

// == Import
import './home.scss';

// == Component
const Quotes = () => {
  // here we want a randomQuote (V1) of greek philosopher with Math.random and some data
  // we have to put it in Utils
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="random-quote">
      <div className="one-quote">
        {randomQuote}
      </div>
    </div>
  );
};

// == Export
export default Quotes;
