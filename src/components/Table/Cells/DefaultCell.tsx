import React from "react";
import styles from "./DefaultCell.module.scss";

const DefaultCell = cellinfo => {
  return <span className={styles.text}>{cellinfo.cell.value}</span>;
};

export default DefaultCell;
