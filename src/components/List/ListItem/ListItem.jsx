import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ firstName, lastName, lessonScore }) => {
  return (
    <div className={`row ${lessonScore<35 && styles.highlighted}`}>
      <div className="cell">
        {firstName} {lastName}
      </div>
      <div className="cell">{lessonScore}</div>
    </div>
  );
};

export default ListItem;
