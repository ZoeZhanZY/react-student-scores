import React from "react";
import StudentsData from "../students.json";
import ListItem from "./ListItem";

function App() {
  return (
    <>
      <h1>Student Score List</h1>
      <div className="container">
        <div className="filter">
          <input placeholder="Filter student name" />
        </div>
        <div className="row">
          <div className="title cell">Student</div>
          <div className="title cell">Score</div>
        </div>

        <div className="list">
          
          {StudentsData.map((student) => (
            <ListItem
              key={student.id}
              firstName={student.firstName}
              lastName={student.lastName}
              lessonScore={student.lessonScore}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
