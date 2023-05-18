import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{ cartItems, setCartItems, isLoading, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
