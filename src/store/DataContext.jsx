import React, { createContext, useContext, useState } from 'react';

const INITIAL_STATE = { isAuthorized: false };

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(INITIAL_STATE);

  const setValues = values => setData(prevData => ({ ...prevData, ...values }));
  const resetValues = () => setData(INITIAL_STATE);

  return (
    <DataContext.Provider value={{ data, setValues, resetValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
