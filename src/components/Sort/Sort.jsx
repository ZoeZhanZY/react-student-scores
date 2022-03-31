import React, { useEffect, useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import styles from "./Sort.module.css";

const Sort = ({ renderedList, sortingKey, text, setRenderedList }) => {
  const [isAsdSort, setIsAsdSort] = useState(false);

  const newList = [...renderedList];

  const handleSort = () => {
    setIsAsdSort((previousState) => !previousState);
  };

  const compareText = (a, b) => {
    if (a[sortingKey] < b[sortingKey]) {
      return -1;
    }
    if (a[sortingKey] > b[sortingKey]) {
      return 1;
    }
    return 0;
  };

  const compareNumber = (a, b) => {
    return a[sortingKey] - b[sortingKey];
  };

  useEffect(() => {
    if (text === "Student") {
      const asdNameList = newList.sort(compareText);

      isAsdSort
        ? setRenderedList(asdNameList)
        : setRenderedList(asdNameList.reverse());
    }
    if (text === "Score") {
      const asdScoreList = newList.sort(compareNumber);

      isAsdSort
        ? setRenderedList(asdScoreList)
        : setRenderedList(asdScoreList.reverse());
    }
  }, [isAsdSort]);

  return (
    <div className={`${styles.title} `}>
      {text}{" "}
      <ArrowDropDownCircleOutlinedIcon
        className={`${styles.arrow} ${isAsdSort && styles.rotate}`}
        onClick={() => handleSort()}
      />
    </div>
  );
};

export default Sort;
