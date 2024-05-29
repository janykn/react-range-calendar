import React from "react";
import DateRangePicker from "./DateRangePicker";
import "./App.css";

const App = () => {
  //(Jan(0),...., Dec(11)) January is 0th month and Dec is 11th month. it will be (YYYY, MM-1, DD) format for passsing dates as props
  const minDate = new Date(2002, 6, 1); // January 1, 2022 
  const maxDate = new Date(2023, 11, 31); // December 31, 2023
  const initialStartDate = new Date(2023, 6, 14);

  return (
    <div className="app">
      <h1>Date Range Picker</h1>
      <DateRangePicker minDate={minDate} maxDate={maxDate} startDate={initialStartDate} theme="dark-theme"/>
    </div>
  );
};

export default App;
