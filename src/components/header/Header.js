import React from 'react';
import './Header.css';

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

    return (
    <div className='header'>
        <h2>Available budget in {date}</h2>
        <div>
            <h1>+$150.00</h1>
        </div>
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+$150.00</p>
            </div>
            
            <div>
                <h4>Expense</h4>
                <p className='money minus'>-$150.00</p>
                <span className='percentage-span'>%67</span>
            </div>
        </div>
    </div>
  )
}

export default Header