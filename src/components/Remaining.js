
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const {currency,expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span style ={{wordSpacing: '4px'}}>Remaining: {currency.split(' ')[0]} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;