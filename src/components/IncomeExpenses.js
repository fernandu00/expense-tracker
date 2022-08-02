import React, { useState, useEffect } from 'react'
import './IncomeExpense.css'

const IncomeExpenses = ({income, expense}) => {

   
   
  return (

    <div className='income-expense-container'>
        <div className="income">
        <h4>Income</h4>
        <p className='plus'>$ {income > 0  && income.toFixed(2)}</p>
        </div>
        <div className="expense">
            <h4>Expense</h4>
            <p className='minus'>$ {expense < 0  && expense.toFixed(2)}</p>
        </div>

</div>                          
  )
}

export default IncomeExpenses