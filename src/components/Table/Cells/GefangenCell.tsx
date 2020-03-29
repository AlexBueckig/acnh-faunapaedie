import React from "react";
import { useSavedData } from "../../../hooks";

const GefangenCell: React.FC<any> = (cellinfo, test) => {
  const { savedData, setSavedData } = useSavedData();
  const onClick = () => {
    setSavedData(prev => {
      if (!savedData[cellinfo.row.original.Name]) {
        return { ...prev, [cellinfo.row.original.Name]: 1 };
      } else {
        return { ...prev, [cellinfo.row.original.Name]: undefined };
      }
    });
  };

  return <button onClick={onClick}>{cellinfo.cell.value ? "✅" : "🎣"}</button>;
};

export default GefangenCell;
