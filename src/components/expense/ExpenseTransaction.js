import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const ExpenseTransaction = ({ expTr }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="minus">
      {expTr.text}
      <span>-${expTr.amount.toFixed(2)}</span>
      <button
        onClick={() => deleteTransaction(expTr.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default ExpenseTransaction;
