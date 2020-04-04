import React from "react";
import { useSavedData } from "../../../hooks";
import styles from "./GefangenCell.module.scss";

const GefangenCell: React.FC<any> = (cellinfo, test) => {
  const { setSavedData } = useSavedData();
  const onChange = e => {
    setSavedData(prev => {
      if (e.target.checked) {
        return { ...prev, [cellinfo.row.original.Name]: 1 };
      } else {
        return { ...prev, [cellinfo.row.original.Name]: undefined };
      }
    });
  };

  return (
    <label className={styles["checkbox__label"]}>
      {cellinfo.cell.value ? "✔️" : "🎣"}
      <input
        type="checkbox"
        className={styles["checkbox__input"]}
        checked={cellinfo.cell.value}
        onChange={onChange}
      />
    </label>
  );
};

export default GefangenCell;
