// import React, { useContext } from "react";
// import { ExpenseContext } from "../context/ExpenseContext";

// const ExpenseItem = ({ expense }) => {
//   const { deleteExpense, editExpense } = useContext(ExpenseContext);

//   return (
//     <div className="expense-item">
//       <span>
//         {expense.description}: ${expense.amount}
//       </span>
//       <button onClick={() => deleteExpense(expense.id)}>Delete</button>
//       <button
//         onClick={() => editExpense({ ...expense, description: "Updated" })}
//       >
//         Edit
//       </button>
//     </div>
//   );
// };

// export default ExpenseItem;

import React, { useState } from "react";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense, editExpense } = useContext(ExpenseContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newAmount, setNewAmount] = useState(expense.amount);

  const handleEdit = () => {
    if (isEditing) {
      editExpense({ ...expense, amount: parseFloat(newAmount) });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="expense-item">
      <span>{expense.description}</span>
      {isEditing ? (
        <input
          type="number"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
        />
      ) : (
        <span>${expense.amount.toFixed(2)}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
