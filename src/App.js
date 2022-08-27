import "./App.css";
import React, { useEffect, useState } from "react";
import ModalForm from "./ModalForm";

function App() {
  const [display, setDisplay] = useState("none");
  const [schedule, setSchedule] = useState([]);
  const [data, setData] = useState({
    column: "doctor",
    startTime: "09:00",
    endTime: "09:00",
  });
  const [time, setTime] = useState([
    {
      time: "09:00",
      isdoctor: false,
      isassistant: false,
      ishyginest: false,
      doctorrowspan: 0,
      assisrowspan: 0,
      hygirowspan: 0,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
    },
    {
      time: "10:00",
      isdoctor: false,
      isassistant: false,
      ishyginest: false,
      doctorrowspan: 0,
      assisrowspan: 0,
      hygirowspan: 0,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
    },
    {
      time: "11:00",
      isdoctor: false,
      isassistant: false,
      ishyginest: false,
      doctorrowspan: 0,
      assisrowspan: 0,
      hygirowspan: 0,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
    },
    {
      time: "12:00",
      isdoctor: false,
      isassistant: false,
      ishyginest: false,
      doctorrowspan: 0,
      assisrowspan: 0,
      hygirowspan: 0,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
    },
    {
      time: "13:00",
      isdoctor: false,
      isassistant: false,
      ishyginest: false,
      doctorrowspan: 0,
      assisrowspan: 0,
      hygirowspan: 0,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
    },
    {
      time: "14:00",
      isdoctor: false,
      isassistant: false,
      ishyginest: false,
      doctorrowspan: 0,
      assisrowspan: 0,
      hygirowspan: 0,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
    },
    {
      time: "15:00",
      isdoctor: false,
      isassistant: false,
      ishyginest: false,
      doctorrowspan: 0,
      assisrowspan: 0,
      hygirowspan: 0,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
    },
  ]);
  const [addModalState, setAddModalState] = useState(false);
  const [spanclass, setSpanclass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var iserror = false;

    const start = parseInt(data.startTime);
    const end = parseInt(data.endTime);
    const diff1 = end - start + 1;

    if (data.column == "doctor") {
      var blockedtime = time.filter(
        (f) =>
          !f.isbinddocData && f.time >= data.startTime && f.time <= data.endTime
      );

      if (blockedtime.length != diff1) {
        iserror = true;
        alert("You have selected this time already!");
      }
    }

    if (data.column == "assistant") {
      var blockedtime = time.filter(
        (f) =>
          !f.isbindassData && f.time >= data.startTime && f.time <= data.endTime
      );

      if (blockedtime.length != diff1) {
        iserror = true;
        alert("You have selected this time already!");
      }
    }

    if (data.column == "hygienist") {
      var blockedtime = time.filter(
        (f) =>
          !f.isbindhybData && f.time >= data.startTime && f.time <= data.endTime
      );

      if (blockedtime.length != diff1) {
        iserror = true;
        alert("You have selected this time already!");
      }
    }

    if (!iserror) {
      time.forEach((tm) => {
        if (data.column == "doctor") {
          if (tm.time == data.startTime && diff1 >= 0) {
            tm.isdoctor = true;
            tm.doctorrowspan = diff1;
          }
          if (tm.time >= data.startTime && tm.time <= data.endTime) {
            tm.isbinddocData = true;
          }
        }

        if (data.column == "assistant") {
          if (tm.time == data.startTime && diff1 >= 0) {
            tm.isassistant = true;
            tm.assisrowspan = diff1;
          }
          if (tm.time >= data.startTime && tm.time <= data.endTime) {
            tm.isbindassData = true;
          }
        }

        if (data.column == "hygienist") {
          if (tm.time == data.startTime && diff1 >= 0) {
            tm.ishyginest = true;
            tm.hygirowspan = diff1;
          }
          if (tm.time >= data.startTime && tm.time <= data.endTime) {
            tm.isbindhybData = true;
          }
        }
      });

      setTime(time);
    }

    setAddModalState(false);
  };

  const addBtnClick = () => {
    setAddModalState(true);
  };

  const BindDoctortd = (data, index) => {
    if (data.isdoctor) {
      return (
        <td
          rowSpan={data.doctorrowspan > 0 ? data.doctorrowspan : 1}
          className="tddemo"
        >
          Available
        </td>
      );
    } else if (data.doctorrowspan == 0 && !data.isbinddocData) {
      return <td></td>;
    }
  };

  const BindAssistanttd = (data, index) => {
    if (data.isassistant) {
      return (
        <td
          rowSpan={data.assisrowspan > 0 ? data.assisrowspan : 1}
          className="tddemo"
        >
          Available
        </td>
      );
    } else if (data.assisrowspan == 0 && !data.isbindassData) {
      return <td></td>;
    }
  };

  const BindHyginesttd = (data, index) => {
    if (data.ishyginest) {
      return (
        <td
          rowSpan={data.hygirowspan > 0 ? data.hygirowspan : 1}
          className="tddemo"
        >
          Available
        </td>
      );
    } else if (data.hygirowspan == 0 && !data.isbindhybData) {
      return <td></td>;
    }
  };

  return (
    <div className="App">
      <div className="availability-section">
        <button onClick={addBtnClick}> ADD AVAILABILITY</button>
      </div>
      <ModalForm
        data1={{
          addModalState,
          data,
          setData,
          handleSubmit,
          setAddModalState,
        }}
      />
      <div style={{ display: display }}></div>
      <div>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Doctor</th>
              <th>Assistant</th>
              <th>Hygienist</th>
            </tr>

            {time &&
              time.map((item, id, timearr) => {
                return (
                  <tr key={id}>
                    <th>{item.time}</th>

                    {BindDoctortd(item, id)}
                    {BindAssistanttd(item, id)}
                    {BindHyginesttd(item, id)}

                    {/* {
                    <td>
                      {schedule &&
                        schedule.map((item1, index, arr) => {
                          console.log(item1);
                          const start = parseInt(item1.startTime);
                          const end = parseInt(item1.endTime);
                          const diff = end - start;
                          console.log(diff, item);
                          //value = hourDiff;
                          if (
                            item1.column == "doctor" &&
                            item1.startTime < item &&
                            item1.endTime > item &&
                            diff > 1
                          ) {
                            // setSpanclass("availble-warp");
                            return <span className="tddemo">&nbsp;</span>;
                          } else if (
                            item1.column == "doctor" &&
                            item1.startTime == item
                          ) {
                            return <span className="tddemo">Available</span>;
                          } else {
                            return "";
                          }
                        })}
                    </td>
                  } */}
                    {/* <td>
                    {schedule &&
                      schedule.map((item1, index, arr) => {
                        //value = hourDiff;
                        if (
                          item1.column == "assistant" &&
                          item1.startTime < item &&
                          item1.endTime > item
                        ) {
                          return <span className="tddemo">&nbsp;</span>;
                        } else if (
                          item1.column == "assistant" &&
                          item1.startTime == item
                        ) {
                          return <span className="tddemo">Available</span>;
                        } else {
                          return "";
                        }
                      })}
                  </td>
                  <td>
                    {schedule &&
                      schedule.map((item1, index, arr) => {
                        //value = hourDiff;
                        if (
                          item1.column == "hygienist" &&
                          item1.startTime < item &&
                          item1.endTime > item
                        ) {
                          return <span className="tddemo">&nbsp;</span>;
                        } else if (
                          item1.column == "hygienist" &&
                          item1.startTime == item
                        ) {
                          return <span className="tddemo">Available</span>;
                        } else {
                          return "";
                        }
                      })}
                  </td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
