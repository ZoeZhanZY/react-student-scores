import React, { useState } from "react";
import StudentsData from "../students.json";
import List from "./List/List.jsx";
import Filter from "./Filter/Filter.jsx";
import Sort from "./Sort/Sort.jsx";

const rawList = [...StudentsData];

function App() {
  const [renderedList, setRenderedList] = useState(rawList);

  return (
    <>
      <h1>Student Score List</h1>
      <div className="container">
        <Filter rawList={rawList} setRenderedList={setRenderedList} />

        <div className="row">
          <div className="cell">
            <Sort
              setRenderedList={setRenderedList}
              renderedList={renderedList}
              sortingKey={"firstName"}
              text={"Student"}
            />
          </div>
          <div className="cell">
            <Sort
              setRenderedList={setRenderedList}
              renderedList={renderedList}
              sortingKey={"lessonScore"}
              text={"Score"}
            />
          </div>
        </div>
        <List renderedList={renderedList} />
      </div>
    </>
  );
}

export default App;
