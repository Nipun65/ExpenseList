import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.getValue(event.target.value);
  };
  console.log(props.allYear);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={dropdownChangeHandler}>
          {props.allYear.map((value) => {
            return (
              <option key={Math.random()} value={value}>
                {value}
              </option>
            );
          })}
          <option value="2025">2025</option>

          {/* <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
