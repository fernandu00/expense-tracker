import React from 'react'
import './TransactionList.css'
const TransactionList = ({transactions, removeTransaction, balance, income}) => {
  return (
    <div className='transaction-container'>
    
        <h3>History</h3>
        <ul className='transactions'>
            {transactions.map((transaction) => (
                <li onClick={() => removeTransaction(transaction)} key={transaction.id} className={transaction.amount <= 0 ?  'transaction-minus' : transaction.amount > 0 ? 'transaction-plus' : 'none'}>{transaction.name} <span key={transaction.name}>{transaction.amount}</span></li>
            ))}
            {/* <li className='transaction-plus'> Cash <span>+ 200.00</span></li>
            <li className='transaction-minus'> Bill <span>- 200.00</span></li> */}
        </ul>
    </div>
  )
}

export default TransactionList