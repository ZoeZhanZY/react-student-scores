import React from "react";

import ListItem from "./ListItem/ListItem";


const List = ({renderedList}) => {
	return (
    <div>
      {renderedList.map(({id, firstName, lastName, lessonScore}) => (
        <ListItem
          key={id}
          firstName={firstName}
          lastName={lastName}
          lessonScore={lessonScore}
        />
      ))}
    </div>
  );
};

export default List;