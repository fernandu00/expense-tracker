import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('')
  const [amount, setAmount] = useState('')
  const [transactions, setTransactions] = useState([
    {
      
    }
  ])

  const [income, setIncome] = useState(0)
  const [expense, setexpense] = useState(0)
  const [balance, setBalance] = useState(0)


  let filteredIcome = transactions.filter(transaction => transaction.amount > 0)
  let filteredExpense = transactions.filter(transaction => transaction.amount < 0)
  
  let totalIcome = 0
  let totalExpense = 0

  const removeTransaction = (transaction) => {
    let removedTransactions = transactions.filter((item => item.id !== transaction.id))
    setTransactions(removedTransactions)
    console.log(transactions)
    
  }


  useEffect(()=> {
      filteredIcome.map((item) => {
          totalIcome += parseFloat(item.amount)
          setIncome(totalIcome)
          
      })
      
      filteredExpense.map((item) => {
          totalExpense+= parseFloat(item.amount)
          setexpense(totalExpense)
      })

  },[income, filteredIcome, filteredExpense, transactions, balance])
  
  
  useEffect(()=> {
    let final = parseFloat(income + expense).toFixed(2)
    setBalance(final)
    
},[income, expense, balance, transactions, setBalance])





  return (
    <>
    {/* <h1>{transactions.map((tr) => <p>{tr.name}</p>)}</h1> */}
    <Header/>
    <Balance balance={balance} setBalance={setBalance} income={income} expense={expense}/>
    <IncomeExpenses transactions={transactions} income={income} expense={expense} setIncome={setIncome} setexpense={setexpense} />
    <TransactionList removeTransaction={removeTransaction} transactions={transactions} balance={balance} income={income}/>
    <AddTransaction transactions={transactions} setTransactions={setTransactions} setInput={setInput} setAmount={setAmount} input={input} amount={amount}/>
    </>
      

    
  );
}

export default App;
