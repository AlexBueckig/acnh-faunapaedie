import { useContext } from "react";
import { savedDataContext } from "../context/savedDataContext";

const useSavedData = () => {
  const ctx = useContext(savedDataContext);

  if (ctx === undefined) throw Error("Must be wrapped in Provider...");

  return { savedData: ctx.data, setSavedData: ctx.setData };
};

export default useSavedData;
