import { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const [propItems, setPropItems] = useState(props.items);
  const getDropDownValue = (value) => {
    setFilteredYear(value);
    getFilteredValues();
  };

  const array = [];
  props.items.filter((element, index) => {
    array.push(element.date.getFullYear());
  });
  const allYear = [...new Set(array)];
  const getFilteredValues = () => {
    let propItems = props.items.filter((element) => {
      allYear.push(element.date.getFullYear());
      console.log(allYear);
      return element.date.getFullYear() === parseInt(filteredYear);
    });
    setPropItems((preveItems) => {
      return propItems;
    });
  };
  useEffect(() => {
    console.log(propItems);
    getFilteredValues();
  }, [filteredYear, props]);
  let expensesContent = <ExpenseList propItems={propItems} />;
  if (propItems.length === 0) {
    // expensesContent = <p>No values found</p>;
    expensesContent = (
      <h2 className="expenses-list__fallback">Found no expenses</h2>
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          allYear={allYear}
          selectedYear={filteredYear}
          getValue={getDropDownValue}
        />
        <ExpenseChart expenses={propItems} />
        {expensesContent}
        {/* <ul className="">{expensesContent}</ul> */}

        {/* {propItems.length === 0 && <p>No values found</p>}
        {propItems.length > 0 && <ExpenseList propItems={propItems} />} */}
      </Card>
    </div>
  );
};
export default Expenses;
