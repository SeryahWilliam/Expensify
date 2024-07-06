import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);
  const totalAmount = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <div>
      <h3>Total Expenses: ${totalAmount}</h3>
    </div>
  );
};

export default ExpenseSummary;
