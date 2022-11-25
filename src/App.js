import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Header from './components/header/Header';
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
