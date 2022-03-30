import React, { useEffect, useState } from "react";
import StudentsData from "../students.json";
import ListItem from "./ListItem";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const rawList = [...StudentsData];

function App() {
  const [studentAsdSort, setStudentAsdSort] = useState(true);
  const [scoreAsdSort, setScoreAsdSort] = useState(true);
  const [renderedList, setRenderedList] = useState(rawList);
	const [filterKey, setFilterKey] = useState("");
	
	
  const handleStudentSort = () => {
    setStudentAsdSort(!studentAsdSort);
    console.log({ studentAsdSort, renderedList });
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
      ? renderedList.sort(compareName)
      : renderedList.reverse(compareName);


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
      ? renderedList.sort(compareScore)
      : renderedList.reverse(compareScore);
  };

  const handleFilter = (event) => {
    setFilterKey(event.target.value);
  };

  useEffect(() => {
		const newList = rawList.filter((student) => {
			const name = `${student.firstName} ${student.lastName}`.toLowerCase()
			console.log({name});
			return (
      name.includes(filterKey.toLocaleLowerCase()))}
    );

    setRenderedList(newList);
  }, [filterKey]);

  return (
    <>
      <h1>Student Score List</h1>
      <div className="container">
        <div className="filter">
          <input
            placeholder="Filter student name"
            value={filterKey}
            onChange={(event) => handleFilter(event)}
          />
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
          {renderedList.map((student) => (
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
