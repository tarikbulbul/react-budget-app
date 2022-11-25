import React, { useState, useContext } from 'react';
import './AddTransaction.css';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4} from 'uuid';

const AddTransaction = () => {
    const { addIncome, addExpense } = useContext(GlobalContext);
    const [type, setType] = useState("plus");

    const [newItem, setNewItem] = useState({
        text: "",
        amount: "",
    });

    const { text, amount } = newItem;

    const onChangeValue = (event) => {
        setNewItem({ ...newItem, [event.target.name]: event.target.value });
      };

    const selectType = (value) => {
        setType(value);
    }

    const formSubmited = (event) => {
        event.preventDefault();

        if (text !== "") {
            const newTransaction = {
                id: uuidv4(),
                text:text,
                amount: parseInt(amount)
            }

            setNewItem({
                text: "",
                amount: "",
              });

              if (type === "plus") {
                addIncome(newTransaction);
              } else if (type === "minus") {
                addExpense(newTransaction);
              }
        }
    };

  return (
    <div className='addtransaction'>
        <h3>Add new transaction</h3>
        <form onSubmit={formSubmited}>
            <div className='form-control'>
                <select
                    className="form-type"
                    name="type"
                    onChange={(event) => selectType(event.target.value)}
                >
                    <option value="plus">+</option>
                    <option value="minus">-</option>
                </select>
                <input 
                    name="text"
                    type="text"
                    value={text}
                    onChange={onChangeValue}
                    placeholder="Add description"
                    maxLength="50"
                />
            </div>
            <div className='form-control'>
                <input 
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={onChangeValue}
                    placeholder="Value"
                    min="1"
                />
            </div>
            <button
            style={{background: type === "plus" ? "#5a9b67" : "#cf5856"}}
            className='btn'
            >
            Add Transaction
            </button>
        </form>
    </div>
  )
}

export default AddTransaction;