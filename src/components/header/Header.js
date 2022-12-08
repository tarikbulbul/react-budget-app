import React, { useContext } from 'react';
import './Header.css';
import { GlobalContext } from "../../context/GlobalState";

const Header = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const current = new Date();
    const date = `${months[current.getMonth()]} ${current.getFullYear()}`;

    const { incomeTransactions } = useContext(GlobalContext);
    const { expenseTransactions } = useContext(GlobalContext);

    //Total incomes
    const incomeAmount = incomeTransactions.map((inc) => inc.amount);
    const incomeTotal = incomeAmount.reduce((acc,value) => {
        return acc + value;
    }, 0);

    //Total expenses
    const expenseAmount = expenseTransactions.map((inc) => inc.amount);
    const expenseTotal = expenseAmount.reduce((acc, value) => {
        return acc + value;
    }, 0);

    //Overall total
    const overallTotal = incomeTotal - expenseTotal;

    let percentage = 0;

    if (incomeTotal >= expenseTotal) {
        percentage = Math.round((expenseTotal / incomeTotal) * 100);
    }

    return (
    <div className='header'>
        <h2>Available budget in {date}</h2>
        <div>
            <h1>{incomeTotal >= expenseTotal ? `+$${overallTotal.toFixed(2)}` : `-$${Math.abs(overallTotal.toFixed(2))}`} </h1>
        </div>
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+${incomeTotal.toFixed(2)}</p>
            </div>
            
            <div>
                <h4>Expense</h4>
                <p className='money minus'>-${expenseTotal.toFixed(2)}</p>
                <span className='percentage-span'>{percentage > 0 ? `%${percentage}` : "%"}</span>
            </div>
        </div>
    </div>
  )
}

export default Header