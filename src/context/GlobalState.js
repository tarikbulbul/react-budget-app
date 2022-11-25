import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

//Inital state
const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("listOfIncome")) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem("listOfExpenses")) || [],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "listOfIncome",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "listOfExpenses",
      JSON.stringify(state.expenseTransactions)
    );
  });

  //Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };

  const addExpense = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        deleteTransaction,
        addIncome,
        addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
