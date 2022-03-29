import React, { useState } from "react";
import StudentsData from "../students.json";
import ListItem from "./ListItem";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
function App() {
  const [studentAsdSort, setStudentAsdSort] = useState(true);
  const [scoreAsdSort, setScoreAsdSort] = useState(true);
  const handleStudentSort = () => {
    setStudentAsdSort(!studentAsdSort);
    const compareName = (a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    };
    studentAsdSort
      ? StudentsData.sort(compareName)
      : StudentsData.reverse(compareName);
  };

  const handleScoreSort = () => {
    setScoreAsdSort(!scoreAsdSort);
    const compareScore = (a, b) => {
      if (a.lessonScore < b.lessonScore) {
        return -1;
      }
      if (a.lessonScore > b.lessonScore) {
        return 1;
      }
      return 0;
    };
    scoreAsdSort
      ? StudentsData.sort(compareScore)
      : StudentsData.reverse(compareScore);
  };

  return (
    <>
      <h1>Student Score List</h1>
      <div className="container">
        <div className="filter">
          <input placeholder="Filter student name" />
        </div>
        <div className="row">
          <div className="title cell">
            Student{" "}
            <ArrowDropDownCircleOutlinedIcon
              className={studentAsdSort ? "arrow" : "arrow rotate"}
              onClick={() => handleStudentSort()}
            />
          </div>
          <div className="title cell">
            Score{" "}
            <ArrowDropDownCircleOutlinedIcon
              className={scoreAsdSort ? "arrow" : "arrow rotate"}
              onClick={() => handleScoreSort()}
            />
          </div>
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
