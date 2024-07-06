import React, { createContext, useReducer } from "react";
import expenseReducer from "./ExpenseReducer";

const initialState = {
  expenses: [],
};

export const ExpenseContext = createContext(initialState);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  const editExpense = (expense) => {
    dispatch({ type: "EDIT_EXPENSE", payload: expense });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        addExpense,
        deleteExpense,
        editExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
