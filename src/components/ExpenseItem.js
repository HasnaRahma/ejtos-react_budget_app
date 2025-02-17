import React, { useContext } from 'react';
import {PlusOutlined , DeleteOutlined, MinusOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency,dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    
    const decreaseAllocation = (name) =>{
        const expense = {
            name: name,
            cost:10
        };
        dispatch({
            type:'RED_EXPENSE',
            payload:expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency.split(' ')[0]}   {props.cost}</td>
        <td><Button id={'green-primary'} onClick={event=> increaseAllocation(props.name)} type="primary" shape="circle" icon={<PlusOutlined/>}/></td>
        <td><Button onClick={event=> decreaseAllocation(props.name)} type="primary" danger shape="circle" icon={<MinusOutlined />}/></td>
        <td><Button onClick={handleDeleteExpense} type="primary" danger shape="circle" icon={<DeleteOutlined/>}></Button></td>
        </tr>
    );
};

export default ExpenseItem;
