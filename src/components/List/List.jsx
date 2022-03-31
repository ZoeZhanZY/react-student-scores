import React from "react";

import ListItem from "./ListItem/ListItem";
import styles from "./List.module.css";

const List = ({renderedList}) => {
	return (
    <div>
      {renderedList.map((student) => (
        <ListItem
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          lessonScore={student.lessonScore}
        />
      ))}
    </div>
  );
};

export default List;