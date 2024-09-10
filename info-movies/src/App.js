import React from 'react';

// Components
import Header from './components/Header/headerIndex'
import Home from './components/Home/home'

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
