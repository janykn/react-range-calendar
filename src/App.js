import React, { useState } from "react";
import {DateRangePicker} from "react-ranged-datepicker";
import "./App.css";

const App = () => {
  const minDate = new Date(2023, 11, 1); // January 1, 2023
  const maxDate = new Date(2029, 1, 2); // February 2, 2024
  const initialStartDate = new Date(2025, 6, 14); // May 14, 2023

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = ({ startDate, endDate }) => {
    setSelectedDates({ startDate, endDate });
  };

  return (
    <div className="app">
      <h1>Date Range Picker</h1>
      <DateRangePicker
        minDate={minDate}
        maxDate={maxDate}
        startDate={initialStartDate}
        onDateChange={handleDateChange}
      />
      <div>
        <p>
          Selected Start Date:{" "}
          {selectedDates.startDate
            ? selectedDates.startDate.toDateString()
            : "None"}
        </p>
        <p>
          Selected End Date:{" "}
          {selectedDates.endDate
            ? selectedDates.endDate.toDateString()
            : "None"}
        </p>
      </div>
    </div>
  );
};

export default App;