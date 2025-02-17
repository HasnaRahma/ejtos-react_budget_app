import { Button } from 'antd';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const AllocationForm = (props) => {
    const { currency, dispatch,remaining  } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
    const handleImputChange = (inputValue) => {
    // Use regular expression to check if the input is a valid number
    if (/^\d*$/.test(inputValue)) {
        setCost(inputValue);
      }
      else{
        alert("Only number value accepted !")
      }
    }
    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                </select>
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                            <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>
                <h6 style={{marginLeft : '2rem'}}>{currency.split(' ')[0]}</h6>
                <input
                    required='required'
                    type='text'
                    id='cost'
                    value={cost}
                    style={{ marginLeft: '1rem' , size: 10}}
                    onChange={(event) => handleImputChange(event.target.value)}>
                </input>            
                <Button type="primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                    Save
                </Button>
            </div>
        </div>
    </div>
    );
};

export default AllocationForm;
