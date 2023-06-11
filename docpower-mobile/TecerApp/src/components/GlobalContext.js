import React, { createContext, useState } from 'react';

// Cria o contexto
const GlobalContext = createContext();

// Cria o provedor do contexto
const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState('Valor inicial da variável global');

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };