import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  return (
    <div>
      {props.propItems.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
