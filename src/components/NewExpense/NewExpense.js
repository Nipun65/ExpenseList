import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseForm = (enteredExpenseData) => {
    const addExpense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.newValue(addExpense);
  };
  const cancelHandler = () => {
    setViewContent(
      <button onClick={addNewExpenseHandler}>Add New Expense</button>
    );
  };
  const addNewExpenseHandler = () => {
    setViewContent(
      <ExpenseForm
        onCancel={cancelHandler}
        onSaveExpenseForm={saveExpenseForm}
      />
    );
  };
  const [viewContent, setViewContent] = useState(
    <button onClick={addNewExpenseHandler}>Add New Expense</button>
  );
  return (
    <div>
      <div className="new-expense">{viewContent}</div>
    </div>
  );
};

export default NewExpense;
