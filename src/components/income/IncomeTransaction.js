import React, { useContext } from 'react';
import {GlobalContext } from '../../context/GlobalState';

const IncomeTransaction = ({ incTr }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className='plus'>
            {incTr.text}
            <span>+${incTr.amount.toFixed(2)}</span>
            <button
                onClick={() => deleteTransaction(incTr.id)}
                className='delete-btn'
            >
                x
            </button>
        </li>
    );
};

export default IncomeTransaction;