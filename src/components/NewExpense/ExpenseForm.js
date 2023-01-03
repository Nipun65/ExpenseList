import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((prevestate) => {
      return { ...prevestate, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setUserInput((prevestate) => {
      return { ...prevestate, amount: parseInt(event.target.value) };
    });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setUserInput((prevestate) => {
      return { ...prevestate, date: new Date(event.target.value) };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setUserInput((prevestate) => {
      return {
        ...userInput,
        title: "",
        amount: "",
        date: "",
      };
    });
    props.onSaveExpenseForm(userInput);
    // setUserInput({ title: "", amount: "", date: "" });
    console.log(userInput);
  };
  const cancelHandler = () => {
    props.onCancel();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.title}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
          {/* <input
            value={userInput.amount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.date}
            onChange={dateChangeHandler}
            type="date"
            min="2019-10-1"
            max="2023-12-12"
          />
        </div>
        <div className="new-expense__actions"></div>
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
