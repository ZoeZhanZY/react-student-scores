import React, { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import styles from "./Sort.module.css";

const Sort = ({ renderedList, sortingKey, text, setRenderedList }) => {
  const [isAsdSort, setIsAsdSort] = useState(false);

  const compareEl = (a, b) => {
    if (a[sortingKey] < b[sortingKey]) {
      return -1;
    }
    if (a[sortingKey] > b[sortingKey]) {
      return 1;
    }
    return 0;
  };

  const handleSort = () => {
    setIsAsdSort(!isAsdSort);
    const newList = [...renderedList];

    isAsdSort
      ? setRenderedList(newList.sort(compareEl))
      : setRenderedList(newList.reverse(compareEl));
  };

  return (
    <>
      {text}{" "}
      <ArrowDropDownCircleOutlinedIcon
        className={`${styles.arrow} ${isAsdSort && styles.rotate}`}
        onClick={() => handleSort()}
      />
    </>
  );
};

export default Sort;
