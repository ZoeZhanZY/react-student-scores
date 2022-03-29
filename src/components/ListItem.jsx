import React from "react";

const ListItem = ({ firstName, lastName, lessonScore }) => {
	return(
		// <div { lessonScore<35? className="row" : className="row highlighted"}>
		<div className={lessonScore<35 ? "highlighted row" : "row"}>
		 <div className="cell">{firstName} {lastName}</div>
		 <div className="cell">{lessonScore}</div>
   </div>)
	
};

export default ListItem;