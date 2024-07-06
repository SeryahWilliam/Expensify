// import React from "react";
// import { ExpenseProvider } from "./context/ExpenseContext";
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
// import ExpenseSummary from "./components/ExpenseSummary";
// import "./styles.css";

// function App() {
//   return (
//     <ExpenseProvider>
//       <div className="App">
//         <h1>Expensify</h1>
//         <ExpenseSummary />
//         <ExpenseForm />
//         <ExpenseList />
//       </div>
//     </ExpenseProvider>
//   );
// }

// export default App;

import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./styles.css";

function App() {
  return (
    <ExpenseProvider>
      <div className="App">
        <h1>Expensify</h1>
        <ExpenseSummary />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;
