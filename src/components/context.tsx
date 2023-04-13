import React, { ReactNode, useContext, useState } from 'react';

type GlobalContextType = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};
interface Props {
  children: ReactNode;
}

const GlobalContext = React.createContext<GlobalContextType>(
  {} as GlobalContextType
);
export const ContextProvider = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <GlobalContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
