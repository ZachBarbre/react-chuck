import React from 'react';
import Quote from './components/Quote.jsx';
import Image from './components/Image.jsx';
import Category from './components/Category.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Chuck Says...
      </header>
      <Image />
      <Quote />
      <Category />
    </div>
  );
}

export default App;
