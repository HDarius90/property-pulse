'use client';
import { createContext, useState, useContext } from 'react';

//Create context
export const GlobalContext = createContext();

//Create provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
