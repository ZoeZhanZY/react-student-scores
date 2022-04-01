import React, { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import styles from "./Sort.module.css";

const Sort = ({ sortingRule, text }) => {
  const [isAsdSort, setIsAsdSort] = useState(false);

  const handleSort = () => {
		setIsAsdSort((previousState) => !previousState);
		sortingRule(isAsdSort);
  };

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
