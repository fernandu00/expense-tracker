import "./AddTransaction.css";
import { v4 as uuid } from "uuid";

const AddTransaction = ({
  setInput,
  setAmount,
  amount,
  input,
  setTransactions,
  transactions,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([
      ...transactions,
      { id: uuid(), name: input, amount: amount },
    ]);
    setAmount("");
    setInput("");
  };

  return (
    <div className="add-transaction-container">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="transaction">Transaction</label>
        <input
          type="text"
          required
          name="transaction"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          required
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p></p>
        <button type="submit" className="add-transaction">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
