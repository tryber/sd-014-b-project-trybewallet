import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WalletContext from './WalletContext';

function ContextProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  const contextValue = {
    expenses,
    setExpenses,
  };
  return (
    <WalletContext.Provider value={ contextValue }>
      {children}
    </WalletContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
