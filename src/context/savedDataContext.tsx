import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const savedDataContext = createContext<any>(null);

const SavedDataProvider = ({ children }) => {
  const location = useLocation();
  const name = location.pathname.replace("/", "");

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(name) || "{}")
  );

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(data));
  }, [data, name]);

  return (
    <savedDataContext.Provider value={{ data, setData }}>
      {children}
    </savedDataContext.Provider>
  );
};

export { savedDataContext };

export default SavedDataProvider;
