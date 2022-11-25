import React from 'react';
import './App.css';
import {GlobalProvider} from "./context/GlobalState";
import Header from './components/header/Header';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/income/IncomeList';
import ExpensesList from './components/expense/ExpensesList';


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <AddTransaction />
        <div className='container'>
          <IncomeList />
          <ExpensesList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
