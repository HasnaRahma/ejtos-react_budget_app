import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
import { Select } from 'antd'; 
import '../App.css';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const {dispatch } = useContext(AppContext);
    // Personnalize the Select style
    const greenStyle = {
        select: {
          backgroundColor: 'lightgreen', // Background color
        },
        option: {
          backgroundColor: 'lightgreen', // Background color for options
          color: 'darkgreen', // Text color for options
        },
      };
    const changeCurrency = (val)=>{
        console.log(val)
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    return (
        <div className='alert alert-secondary'>{
            <Select 
            name="Currency" 
            id="currency-select"                  
            placeholder={`Currency (${currency})`} 
            onChange={val=>changeCurrency(val)}
            style={greenStyle.select}>
              <option style={greenStyle.option} value="£ Pound">£ Pound</option>
              <option style={greenStyle.option} value="₹ Ruppe">₹ Ruppe</option>
              <option style={greenStyle.option} value="€ Euro"> € Euro</option>
              <option style={greenStyle.option} value="$ Dollar">$ Dollar</option>
            </Select>	
            }	
          </div>
    );
};
export default Currency;
