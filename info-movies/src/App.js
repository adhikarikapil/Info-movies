import React from 'react';

// Components
import Header from './components/header/headerIndex'
import Home from './components/home/Home'

// Styles
import { GlobalStyle } from './GlobalStyle'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
