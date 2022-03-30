import React, { useState } from "react";
import StudentsData from "../students.json";
import ListItem from "./ListItem";
import Filter from "./Filter/Filter.jsx";
import Sort from "./Sort/Sort.jsx";

// import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const rawList = [...StudentsData];

function App() {
  const [renderedList, setRenderedList] = useState(rawList);

  return (
    <>
      <h1>Student Score List</h1>
      <div className="container">
        <Filter rawList={rawList} setRenderedList={setRenderedList} />
        <div className="row">
          <div className="title cell">
            <Sort
              setRenderedList={setRenderedList}
              renderedList={renderedList}
              sortingKey={"firstName"}
              text={"Student"}
            />
          </div>
          <div className="title cell">
            <Sort
              setRenderedList={setRenderedList}
              renderedList={renderedList}
              sortingKey={"lessonScore"}
              text={"Score"}
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
