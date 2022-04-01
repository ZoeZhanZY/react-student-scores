import React, { useState } from "react";
import StudentsData from "../students.json";
import List from "./List/List.jsx";
import Filter from "./Filter/Filter.jsx";
import Sort from "./Sort/Sort.jsx";

function App() {
  const [renderedList, setRenderedList] = useState(StudentsData);

  const sortingName = (isAsdSort) => {
    const compareText = (a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    };
    const asdNameList = [...renderedList.sort(compareText)];

    isAsdSort
      ? setRenderedList(asdNameList)
      : setRenderedList(asdNameList.reverse());
  };

  const sortingScore = (isAsdSort) => {
    const compareNumber = (a, b) => {
      return a.lessonScore - b.lessonScore;
    };

    const asdScoreList = [...renderedList.sort(compareNumber)];

    isAsdSort
      ? setRenderedList(asdScoreList)
      : setRenderedList(asdScoreList.reverse());
  };

  return (
    <>
      <h1>Student Score List</h1>
      <div className="container">
        <Filter rawList={StudentsData} setRenderedList={setRenderedList} />

        <div className="row">
          <div className="cell">
            <Sort sortingRule={sortingName} text={"Student"} />
          </div>
          <div className="cell">
            <Sort sortingRule={sortingScore} text={"Score"} />
          </div>
        </div>
        <List renderedList={renderedList} />
      </div>
    </>
  );
}

export default App;
