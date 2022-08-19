import "./IncomeExpense.css";

const IncomeExpenses = ({
  income,
  expense,
  setIncome,
  setexpense,
  transactions,
}) => {
  return (
    <div className="income-expense-container">
      <div className="income">
        <h4>Income</h4>
        <p className="plus">
          $ {transactions.length === 0 ? "0.00" : income.toFixed(2)}
        </p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p className="minus">
          $ {transactions.length === 0 ? "0.00" : expense.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
