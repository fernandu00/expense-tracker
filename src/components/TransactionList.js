import React from "react";
import "./TransactionList.css";
const TransactionList = ({
  transactions,
  removeTransaction,
  balance,
  income,
}) => {
  return (
    <div className="transaction-container">
      <h3>History</h3>
      <div className="transactions">
        {transactions.length > 0 &&
          transactions.map((transaction) => {
            const { id, name, amount } = transaction;
            return (
              <article
                key={id}
                onClick={() => removeTransaction(id)}
                className={
                  amount <= 0
                    ? "transaction-minus"
                    : amount > 0
                    ? "transaction-plus"
                    : "none"
                }
              >
                <p>{name}</p> <p>{amount}</p>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default TransactionList;
