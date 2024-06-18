import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense, editExpense } = useContext(ExpenseContext);

  return (
    <div className="expense-item">
      <span>
        {expense.description}: ${expense.amount}
      </span>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      <button
        onClick={() => editExpense({ ...expense, description: "Updated" })}
      >
        Edit
      </button>
    </div>
  );
};

export default ExpenseItem;
