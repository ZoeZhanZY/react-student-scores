import React from "react";

function App() {
  return (
    <>
      <h1>Student Score List</h1>
      <div className="container">
        <div className="title-row">
          <div className="title-name">
            <h2>Student Name</h2>
          </div>
          <div className="title-name">
            <h2>Score</h2>
          </div>
        </div>
        <div className="filter">
          <input placeholder="Filter name" />
        </div>
        <div className="list">
          <div className="content-row">
            <div className="content-cell">Diva</div>
            <div className="content-cell">4.8</div>
          </div>
          <div className="content-row">
            <div className="content-cell">Diva</div>
            <div className="content-cell">4.8</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
