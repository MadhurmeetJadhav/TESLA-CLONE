import React from 'react';
import Header from './components/Header';
import './App.css';
import './index.css'
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home/>
    </div>
  );
}

export default App;
