import "./App.css";

import ReactDOM from "react-dom/client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css//
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = (event) => {
    event.preventDefault();

    // log form content
    console.log(new Date(startDate.setHours(0, 0, 0, 0)).getTime());
  };

  let timestamp = new Date(startDate.setHours(0, 0, 0, 0)).getTime();
  let excluded = [];
  let excluded17 = [
    {
      time: "20:00",
      date: "Wed Sep 30 2020",
    },
    {
      time: "18:00",
      date: "Wed Sep 18 2020",
    },
  ];
  let excluded18 = [
    {
      time: "14:00",
      date: "Wed Sep 30 2020",
    },
    {
      time: "18:00",
      date: "Wed Sep 18 2020",
    },
  ];
  const fin = (time) => {
    const result = ReactDOM.createRoot(document.getElementById("result"));

    const element = (
      <div>
        <span>
          {new Date(time).toLocaleDateString("uk-UA", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    );
    result.render(element);
  };
  const tick = () => {
    const test = ReactDOM.createRoot(document.getElementById("test"));
    const timeArray = [];
    console.log("tick", timestamp);
    if (timestamp === 1691528400000) {
      timeArray.push(10, 12);
    }
    if (timestamp === 1692046800000) {
      timeArray.push("12:00", "14:00", "20:00");
    }
    console.log(timeArray);
    const element = (
      <>
        <h2>Select time</h2>
        <div>
          {timeArray.map((timeArray, index) => (
            <button
              key={index}
              className="button-8"
              onClick={() => fin(new Date(timestamp).setHours(timeArray))}
            >
              {timeArray.toString() + ":00"}
            </button>
          ))}
        </div>
      </>
    );
    test.render(element);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            console.log(new Date(date.setHours(0, 0, 0, 0)).getTime());
            timestamp = new Date(date.setHours(0, 0, 0, 0)).getTime();
            console.log(timestamp);
            tick();
          }}
          disabledKeyboardNavigation
          onFocus={(e) => e.target.blur()} // <--- Adding this
        />
      </form>
      <div id="test">
        <span></span>
      </div>
      <div id="result"></div>
      <button className="button-8" onClick={tick} disabled={true}>
        Post
      </button>
    </>
  );
};

export default App;
