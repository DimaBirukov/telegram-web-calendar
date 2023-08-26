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
  const tick = () => {
    const test = ReactDOM.createRoot(document.getElementById("test"));
    const timeArray = [];
    console.log("tick", timestamp);
    if (timestamp === 1691528400000) {
      timeArray.push("10:00", "12:00");
    }
    console.log(timeArray);
    const element = (
      <div>
        <h2>Select time</h2>
        {timeArray.map((timeArray) => (
          <button class="button-8">{timeArray}</button>
        ))}
      </div>
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
        />
        {/* <DatePicker
          selected={""}
          onChange={(date) => {
            setStartDate(date);
            console.log(new Date(startDate.setHours(0, 0, 0, 0)).getTime());
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={120}
          minTime={new Date(new Date().setHours(10, 0, 0))}
          maxTime={new Date(new Date().setHours(20, 0, 0))}
          excludeTimes={excluded.map((exclude, index) => {
            console.log(exclude);
            return new Date(
              new Date().setHours(
                parseInt(exclude.time.slice(0, -3)),
                exclude.time.slice(3),
                0
              )
            );
          })}
        /> */}
      </form>
      <div id="test">
        <span></span>
      </div>
      <button className="button-8" onClick={tick} disabled={true}>
        Post
      </button>
    </>
  );
};

export default App;
