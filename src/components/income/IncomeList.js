import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  
  return (
    <div>
      <h3>INCOME</h3>
      <ul className='list'>
        {incomeTransactions.map((incTr) => (
          <IncomeTransaction key={incTr.id}  incTr={incTr}/>
        ))}
      </ul>
    </div>
  )
}

export default IncomeList