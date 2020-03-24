import React from 'react';
import Quote from './components/Quote.jsx';
import Image from './components/Image.jsx';
import './App.css';

function App() {
  const getQuote = 'Chuck Norris can divide by zero.'
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Image />
      <Quote quote={getQuote}/>
    </div>
  );
}

export default App;
