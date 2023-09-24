import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency,budget,expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    // Calculate the totalExpenses to add the limitation on new budget
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const value = event.target.value
    // Use regular expression to check if the input is a valid number
    if (/^\d*$/.test(value)) 
    {
        // Set the upper limit value to 20,000.
        if(value  > 20000)
        {
            alert('The value cannot exceed the limit 20000 !')
            return;
        }
        if(value < totalExpenses)
        {
            alert('you can not reduce the budget value lower than the amount already spent £'+ totalExpenses )
            return;
        }
        setNewBudget(value);
      }
      else{
        alert("Only number value accepted !")
      }
    }
    return (
    <div className='alert alert-secondary'>
    <span>Budget: {currency.split(' ')[0]}   </span>    
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{width: '200px'}}></input>
    </div>
    );
};
export default Budget;
