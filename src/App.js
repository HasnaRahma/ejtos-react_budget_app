import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Import components needed
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
// Import the Provider from Redux context
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className={'col-sm'}>
                            <Budget/>
                        </div>      

                        <div className='col-sm'>
                            <Remaining />
                        </div>        
                
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>    

                        <div className='col-sm'>
                            <Currency />
                        </div>    
                    </div>

                    <h1 className='mt-3'>Allocation</h1>  
                    <div className={'row'}>                    
                        <div className='col-sm'>
                            <ExpenseList/>
                        </div>                    
                    </div>
                    
                    <h1 className='mt-3'>Change allocation</h1>  
                    <div className={'row'}>   
                        <div className='col-sm'>
                            <AllocationForm/>
                        </div>                                                                        
                    </div>                 
            </div>
        </AppProvider>
    );
};
export default App;
