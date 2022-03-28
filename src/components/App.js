import React from "react";

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
          <div className="row">
            <div className="cell">Diva</div>
            <div className="cell">4.8</div>
          </div>
          <div className="row highlighted">
            <div className="cell">Diva</div>
            <div className="cell ">4.8</div>
          </div>
          <div className="row">
            <div className="cell">Diva</div>
            <div className="cell">4.8</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
