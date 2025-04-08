import React, { createContext, useState } from 'react';

export const TransactionsContext = createContext(); // named export

export const TransactionsProvider = ({ children }) => { // named export
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { 
      id: Date.now(), 
      ...transaction 
    }]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};