import React, { useEffect, useState } from "react";
import styles from './Filter.module.css'

const Filter = ({ rawList, setRenderedList }) => {
	const [filterKey, setFilterKey] = useState("");
	const handleFilter = (event) => {
		setFilterKey(event.target.value);
	};

	useEffect(() => {
		const newList = rawList.filter((student) => {
			const name = `${student.firstName} ${student.lastName}`.toLowerCase();
		
			return name.includes(filterKey.toLocaleLowerCase());
		});

		setRenderedList(newList);
	}, [filterKey, rawList, setRenderedList]);

	return (
		<div className={`row ${styles.filter}`} >
      <input
        placeholder="Filter student name"
        value={filterKey}
        onChange={(event) => handleFilter(event)}
      />
    </div>
  );
};

export default Filter;
