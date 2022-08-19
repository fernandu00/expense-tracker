import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { useState, useEffect, useCallback } from "react";

function App() {
  const getLocalStorage = () => {
    let transactionList = localStorage.getItem("transactions");
    if (transactionList) {
      return JSON.parse(localStorage.getItem("transactions"));
    } else {
      return [];
    }
  };

  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState(getLocalStorage());

  const [income, setIncome] = useState(0);
  const [expense, setexpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleIncome = useCallback(() => {
    let filteredIncome = transactions.filter(
      (transaction) => transaction.amount > 0
    );
    if (filteredIncome.length === 0) {
      setIncome(0);
      return;
    }
    let totalIncome = 0;
    filteredIncome.forEach((item) => {
      totalIncome += parseFloat(item.amount);
      return setIncome(totalIncome);
    });
  }, [transactions]);

  const handleExpense = useCallback(() => {
    let filteredExpense = transactions.filter(
      (transaction) => transaction.amount < 0
    );
    if (filteredExpense.length === 0) {
      setexpense(0);
      return;
    }
    let totalExpense = 0;
    filteredExpense.forEach((item) => {
      totalExpense += parseFloat(item.amount);
      return setexpense(totalExpense);
    });
  }, [transactions]);

  const handleBalance = useCallback(() => {
    let final = parseFloat(income + expense).toFixed(2);
    return setBalance(final);
  }, [expense, income]);

  const removeTransaction = useCallback(
    (id) => {
      let newTransactions = transactions.filter(
        (filtered) => filtered.id !== id
      );
      setTransactions(newTransactions);
      handleIncome();
      handleExpense();
      handleBalance();
    },
    [transactions, handleBalance, handleExpense, handleIncome]
  );

  useEffect(() => {
    handleIncome();
    handleExpense();
    handleBalance();
  }, [
    transactions,
    income,
    expense,
    removeTransaction,
    handleBalance,
    handleExpense,
    handleIncome,
  ]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <>
      <Header />
      <div className="container">
        <h4>Your balance</h4>
        <h1>${transactions.length === 0 ? "0.00" : balance}</h1>
      </div>

      <IncomeExpenses
        transactions={transactions}
        income={income}
        expense={expense}
        setIncome={setIncome}
        setexpense={setexpense}
      />
      <TransactionList
        removeTransaction={removeTransaction}
        transactions={transactions}
        balance={balance}
        income={income}
      />
      <AddTransaction
        transactions={transactions}
        setTransactions={setTransactions}
        setInput={setInput}
        setAmount={setAmount}
        input={input}
        amount={amount}
      />
    </>
  );
}

export default App;
