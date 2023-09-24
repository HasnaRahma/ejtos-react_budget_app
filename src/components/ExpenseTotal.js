import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { currency,expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span style ={{wordSpacing: '4px'}}>Spent so far: {currency.split(' ')[0]}  {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
